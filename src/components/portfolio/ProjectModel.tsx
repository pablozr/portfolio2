import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { BufferGeometry, Material, Group } from "three";

/** Renders on demand. No animation frames run while the card is at rest. */
export function ProjectModel({ index }: { index: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const reducedRef = useRef(reduced);
  useEffect(() => {
    reducedRef.current = reduced;
  }, [reduced]);

  useEffect(() => {
    const host = hostRef.current;
    const card = host?.closest("button");
    if (!host || !card) return;
    let disposed = false;
    let started = false;
    let visible = false;
    let cleanup: (() => void) | undefined;
    let refresh: (() => void) | undefined;

    async function build() {
      const T = await import("three");
      const [{ RoomEnvironment }, { RoundedBoxGeometry }] = await Promise.all([
        import("three/addons/environments/RoomEnvironment.js"),
        import("three/addons/geometries/RoundedBoxGeometry.js"),
      ]);
      if (disposed || !host || !card) return;
      const renderer = new T.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      host.appendChild(renderer.domElement);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(34, 1, 0.1, 30);
      camera.position.set(0, 0, 7.8);
      const pmrem = new T.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const env = pmrem.fromScene(room, 0.04);
      room.dispose();
      pmrem.dispose();
      scene.environment = env.texture;
      const model = new T.Group();
      scene.add(model);
      const geometries: BufferGeometry[] = [];
      const materials: Material[] = [];
      const material = (color: string, metalness = 0.7, roughness = 0.23) => {
        const m = new T.MeshPhysicalMaterial({
          color,
          metalness,
          roughness,
          clearcoat: 1,
          clearcoatRoughness: 0.15,
        });
        materials.push(m);
        return m;
      };
      const mesh = (geometry: BufferGeometry, mat: Material, parent: Group = model) => {
        geometries.push(geometry);
        const object = new T.Mesh(geometry, mat);
        parent.add(object);
        return object;
      };
      if (index === 0) {
        const silver = material("#e1e4d5", 0.85);
        const charcoal = material("#333d2c", 0.4);
        const lime = material("#d5fa42", 0.35);
        for (let i = 0; i < 3; i++) {
          const layer = new T.Group();
          layer.position.set((i - 1) * 0.27, (i - 1) * 0.24, i * 0.26);
          layer.rotation.z = (i - 1) * -0.09;
          model.add(layer);
          mesh(
            new RoundedBoxGeometry(2.65, 1.68, 0.12, 4, 0.13),
            i === 1 ? charcoal : silver,
            layer,
          );
          if (i === 2) {
            const chip = mesh(new RoundedBoxGeometry(0.5, 0.38, 0.04, 3, 0.045), lime, layer);
            chip.position.set(-0.74, 0.15, 0.09);
            for (let j = 0; j < 4; j++) {
              const dash = mesh(
                new RoundedBoxGeometry(0.3, 0.055, 0.025, 2, 0.015),
                charcoal,
                layer,
              );
              dash.position.set(-0.76 + j * 0.49, -0.38, 0.075);
            }
            const badge = mesh(new T.CylinderGeometry(0.19, 0.19, 0.025, 40), charcoal, layer);
            badge.rotation.x = Math.PI / 2;
            badge.position.set(0.78, 0.4, 0.08);
          }
        }
      } else if (index === 1) {
        const lavender = material("#aa84d0", 0.6, 0.16);
        const silver = material("#e5ddeb", 0.95, 0.13);
        const shape = new T.Shape();
        shape.moveTo(0, 1.5);
        shape.lineTo(-1.4, -0.95);
        shape.lineTo(1.4, -0.95);
        shape.closePath();
        for (let i = 0; i < 3; i++) {
          const geo = new T.ExtrudeGeometry(shape, {
            depth: 0.32,
            bevelEnabled: true,
            bevelSegments: 4,
            steps: 1,
            bevelSize: 0.065,
            bevelThickness: 0.065,
          });
          geo.translate(0, 0, -0.16);
          const prism = mesh(geo, i === 1 ? silver : lavender);
          prism.position.z = (i - 1) * 0.52;
          prism.rotation.z = (i - 1) * 0.18;
        }
      } else {
        const chrome = material("#a7cbd7", 1, 0.17);
        const lime = material("#d5fa42", 0.5, 0.22);
        for (let i = 0; i < 3; i++) {
          const link = mesh(new T.TorusGeometry(0.77, 0.2, 28, 80), i === 1 ? lime : chrome);
          link.position.y = (i - 1) * 0.95;
          link.rotation.y = i === 1 ? Math.PI / 2 : 0.1;
        }
        model.scale.setScalar(0.9);
      }
      const base = {
        x: index === 0 ? 0.22 : 0.15,
        y: index === 0 ? -0.4 : -0.5,
        z: index === 2 ? -0.5 : -0.15,
      };
      model.rotation.set(base.x, base.y, base.z);
      scene.add(new T.HemisphereLight(0xffffff, 0x606650, 2));
      const key = new T.DirectionalLight(0xffffff, 3);
      key.position.set(2, 4, 5);
      scene.add(key);
      let frame = 0;
      let hovering = false;
      let contextLost = false;
      let previous = 0;
      let renders = 0;
      const target = { x: base.x, y: base.y, z: base.z };
      const draw = () => {
        if (!visible || document.hidden || contextLost) return;
        renderer.render(scene, camera);
        host.dataset.renders = String(++renders);
      };
      const tick = (time: number) => {
        frame = 0;
        if (!visible || document.hidden || contextLost) return;
        const blend = 1 - Math.exp(-Math.min((time - previous) / 1000, 0.05) * 12);
        previous = time;
        model.rotation.x = T.MathUtils.lerp(model.rotation.x, target.x, blend);
        model.rotation.y = T.MathUtils.lerp(model.rotation.y, target.y, blend);
        model.rotation.z = T.MathUtils.lerp(model.rotation.z, target.z, blend);
        const delta =
          Math.abs(model.rotation.x - target.x) +
          Math.abs(model.rotation.y - target.y) +
          Math.abs(model.rotation.z - target.z);
        if (delta < 0.001) model.rotation.set(target.x, target.y, target.z);
        draw();
        if (delta >= 0.001) frame = requestAnimationFrame(tick);
      };
      const schedule = () => {
        if (!frame && visible && !document.hidden && !contextLost) {
          previous = performance.now();
          frame = requestAnimationFrame(tick);
        }
      };
      const enter = (event: PointerEvent) => {
        if (event.pointerType !== "mouse" || reducedRef.current) return;
        hovering = true;
        target.y = base.y + 0.3;
        target.z = base.z + 0.08;
        schedule();
      };
      const move = (event: PointerEvent) => {
        if (!hovering || reducedRef.current) return;
        const rect = card.getBoundingClientRect();
        target.x = base.x + ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
        target.y = base.y + ((event.clientX - rect.left) / rect.width - 0.5) * 0.65;
        schedule();
      };
      const leave = () => {
        hovering = false;
        Object.assign(target, base);
        // Return to the exact still composition, then stop requesting frames.
        schedule();
      };
      const resize = new ResizeObserver(() => {
        const rect = host.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / Math.max(rect.height, 1);
        camera.updateProjectionMatrix();
        draw();
      });
      resize.observe(host);
      const lost = (event: Event) => {
        event.preventDefault();
        contextLost = true;
        host.dataset.status = "unavailable";
      };
      const restored = () => {
        contextLost = false;
        host.dataset.status = "ready";
        draw();
      };
      const visibilityChange = () => {
        if (!document.hidden) {
          model.rotation.set(base.x, base.y, base.z);
          Object.assign(target, base);
          hovering = false;
          draw();
        }
      };
      renderer.domElement.addEventListener("webglcontextlost", lost);
      renderer.domElement.addEventListener("webglcontextrestored", restored);
      document.addEventListener("visibilitychange", visibilityChange);
      card.addEventListener("pointerenter", enter);
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      refresh = () => {
        model.rotation.set(base.x, base.y, base.z);
        Object.assign(target, base);
        hovering = false;
        draw();
      };
      host.dataset.status = "ready";
      cleanup = () => {
        cancelAnimationFrame(frame);
        resize.disconnect();
        card.removeEventListener("pointerenter", enter);
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
        document.removeEventListener("visibilitychange", visibilityChange);
        renderer.domElement.removeEventListener("webglcontextlost", lost);
        renderer.domElement.removeEventListener("webglcontextrestored", restored);
        geometries.forEach((g) => g.dispose());
        materials.forEach((m) => m.dispose());
        env.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !started) {
          started = true;
          build().catch(() => {
            if (!disposed) {
              cleanup?.();
              host.dataset.status = "unavailable";
            }
          });
        } else if (visible) refresh?.();
      },
      { rootMargin: "180px" },
    );
    observer.observe(host);
    return () => {
      disposed = true;
      observer.disconnect();
      cleanup?.();
    };
  }, [index]);

  return (
    <div
      ref={hostRef}
      className={`project-model model-${index}`}
      data-status="loading"
      aria-hidden="true"
    />
  );
}
