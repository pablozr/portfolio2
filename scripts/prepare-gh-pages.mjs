import { writeFile } from "node:fs/promises";
import path from "node:path";

const clientDir = path.resolve("dist", "client");
const serverEntryPath = path.resolve("dist", "server", "server.js");

const { default: server } = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);

async function renderRoute(url) {
  const request = new Request(url, { method: "GET" });
  const response = await server.fetch(request, {}, {});
  const html = (await response.text()).replace(/\u0000/g, "");

  if (!response.ok && !url.endsWith("/404")) {
    throw new Error(`Falha ao renderizar ${url}: ${response.status}`);
  }

  return html;
}

const homeHtml = await renderRoute("https://example.com/");
const notFoundHtml = await renderRoute("https://example.com/404");

await writeFile(path.join(clientDir, "index.html"), homeHtml, "utf8");
await writeFile(path.join(clientDir, "404.html"), notFoundHtml, "utf8");
