import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const base = process.env.VITE_BASE || "/";

function githubPagesFallback() {
  let resolvedBase = base;
  return {
    name: "github-pages-fallback",
    apply: "build",
    configResolved(config) {
      resolvedBase = config.base || "/";
    },
    generateBundle() {
      const segments = resolvedBase.split("/").filter(Boolean).length;
      this.emitFile({
        type: "asset",
        fileName: "404.html",
        source: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Japan 2026</title>
    <script>
      (function () {
        var pathSegmentsToKeep = ${segments};
        var l = window.location;
        l.replace(
          l.protocol + "//" + l.hostname + (l.port ? ":" + l.port : "") +
          l.pathname.split("/").slice(0, 1 + pathSegmentsToKeep).join("/") + "/?/" +
          l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join("/").replace(/&/g, "~and~") +
          (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
          l.hash
        );
      })();
    </script>
  </head>
  <body></body>
</html>
`,
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), githubPagesFallback()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
    },
  },
});
