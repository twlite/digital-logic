import { defineConfig } from "tsup";

export default defineConfig({
    skipNodeModulesBundle: true,
    dts: true,
    entry: ["./src/main.ts"],
    clean: true,
    outDir: "./dist",
    format: ["cjs", "esm"],
    keepNames: true,
    minify: true,
    sourcemap: true,
    target: ["ES6"]
});