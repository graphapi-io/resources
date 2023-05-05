#!/usr/bin/env node

const envFilePlugin = require("esbuild-envfile-plugin");

require("esbuild").build({
  plugins: [envFilePlugin],
  entryPoints: ["src/prompt-handler.ts"],
  minify: true,
  platform: "node",
  bundle: true,
  target: "node14",
  outdir: "build",
});
