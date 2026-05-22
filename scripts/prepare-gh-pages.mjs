import { copyFile } from "node:fs/promises";
import path from "node:path";

const pagesDir = path.resolve("dist", "pages");

await copyFile(path.join(pagesDir, "pages-index.html"), path.join(pagesDir, "index.html"));
await copyFile(path.join(pagesDir, "index.html"), path.join(pagesDir, "404.html"));
