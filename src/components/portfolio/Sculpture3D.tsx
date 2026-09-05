import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Locally modeled, solid WebGL sculpture. Three is loaded after the page paints. */
export function Sculpture3D({ paused }: { paused: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const reduced = useReducedMotion();
  const reducedRef = useRef(reduced);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    reducedRef.current = reduced;
  }, [reduced]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let teardown: (() => void) | undefined;
    async function build() {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js");
      if (disposed || !host) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        });
      } catch {
        setStatus("unavailable");
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
      camera.position.set(0, 0.15, 8.7);
      const pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      // A lime studio reflector gives the silver surface its restrained brand accent.
      const reflectorGeometry = new THREE.PlaneGeometry(9, 9);
      const reflectorMaterial = new THREE.MeshBasicMaterial({
        color: "#d5fa42",
        side: THREE.DoubleSide,
      });
      const reflector = new THREE.Mesh(reflectorGeometry, reflectorMaterial);
      reflector.position.set(-4, 0, 1);
      reflector.rotation.y = Math.PI / 2;
      room.add(reflector);
      const environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      room.dispose();
      reflectorGeometry.dispose();
      reflectorMaterial.dispose();
      pmrem.dispose();

      const geometry = new THREE.TorusKnotGeometry(1.05, 0.36, 240, 40, 2, 3);
      const material = new THREE.MeshPhysicalMaterial({
        color: "#c8cdc2",
        metalness: 1,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.16,
        envMapIntensity: 1.6,
      });
      const sculpture = new THREE.Mesh(geometry, material);
      sculpture.rotation.set(0.35, -0.5, -0.35);
      scene.add(sculpture);
      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(3, 5, 4);
      scene.add(light);
      const rim = new THREE.DirectionalLight(0xd5fa42, 2);
      rim.position.set(-4, -1, 2);
      scene.add(rim);

      let visible = true;
      let contextLost = false;
      let elapsed = 0;
      let previous = 0;
      let frame = 0;
      let dirty = true;
      const pointer = { x: 0, y: 0 };
      const resize = new ResizeObserver(() => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        dirty = true;
      });
      resize.observe(host);
      const visibility = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      visibility.observe(host);
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const rect = host.getBoundingClientRect();
        pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
        pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
      };
      const leave = () => {
        pointer.x = 0;
        pointer.y = 0;
      };
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerleave", leave);
      const lost = (event: Event) => {
        event.preventDefault();
        contextLost = true;
        setStatus("unavailable");
      };
      const restored = () => {
        contextLost = false;
        dirty = true;
        setStatus("ready");
      };
      renderer.domElement.addEventListener("webglcontextlost", lost);
      renderer.domElement.addEventListener("webglcontextrestored", restored);
      const tick = (now: number) => {
        frame = requestAnimationFrame(tick);
        if (now - previous < 32) return;
        const dt = Math.min((now - previous) / 1000, 0.05);
        previous = now;
        if (!visible || document.hidden || contextLost) return;
        const moving = !pausedRef.current && !reducedRef.current;
        if (moving) {
          elapsed += dt;
          sculpture.rotation.y = THREE.MathUtils.lerp(
            sculpture.rotation.y,
            -0.5 + elapsed * 0.15 + pointer.x * 0.6,
            0.05,
          );
          sculpture.rotation.x = THREE.MathUtils.lerp(
            sculpture.rotation.x,
            0.35 + Math.sin(elapsed * 0.24) * 0.2 + pointer.y * 0.4,
            0.05,
          );
          sculpture.rotation.z = -0.35 + Math.sin(elapsed * 0.18) * 0.12;
          sculpture.position.y = Math.sin(elapsed * 0.7) * 0.09;
        }
        if (moving || dirty) {
          renderer.render(scene, camera);
          dirty = false;
        }
      };
      frame = requestAnimationFrame(tick);
      setStatus("ready");
      teardown = () => {
        cancelAnimationFrame(frame);
        resize.disconnect();
        visibility.disconnect();
        host.removeEventListener("pointermove", move);
        host.removeEventListener("pointerleave", leave);
        renderer.domElement.removeEventListener("webglcontextlost", lost);
        renderer.domElement.removeEventListener("webglcontextrestored", restored);
        geometry.dispose();
        material.dispose();
        environment.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    }
    build().catch(() => {
      if (!disposed) {
        teardown?.();
        setStatus("unavailable");
      }
    });
    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return (
    <div className="sculpture-stage" data-status={status}>
      <div ref={hostRef} className="sculpture-canvas" aria-hidden="true" />
      <div className="sculpture-shadow" aria-hidden="true" />
      {status !== "ready" && (
        <span className="sculpture-fallback" aria-hidden="true">
          pf.
        </span>
      )}
    </div>
  );
}
