#!/usr/bin/env node

require("esbuild").build({
  entryPoints: ["src/after-handler.ts"],
  minify: true,
  platform: "node",
  bundle: true,
  target: "node14",
  outdir: "build",
});
