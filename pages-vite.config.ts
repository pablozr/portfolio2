import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPaths(), react(), tailwindcss()],
  build: {
    outDir: "dist/pages",
    emptyOutDir: true,
    rollupOptions: {
      input: "pages-index.html",
    },
  },
});
