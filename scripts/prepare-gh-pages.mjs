import { copyFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const clientDir = path.resolve("dist", "client");
const assetsDir = path.join(clientDir, "assets");

const files = await readdir(assetsDir);

const entryJs = files
  .filter((file) => /^index-.*\.js$/.test(file))
  .sort()
  .at(-1);

const entryCss = files
  .filter((file) => /^styles-.*\.css$/.test(file))
  .sort()
  .at(-1);

if (!entryJs) {
  throw new Error("Nao encontrei bundle de entrada index-*.js em dist/client/assets.");
}

if (!entryCss) {
  throw new Error("Nao encontrei stylesheet styles-*.css em dist/client/assets.");
}

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="./assets/${entryCss}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${entryJs}"></script>
  </body>
</html>
`;

const indexPath = path.join(clientDir, "index.html");
const notFoundPath = path.join(clientDir, "404.html");

await writeFile(indexPath, html, "utf8");
await copyFile(indexPath, notFoundPath);
