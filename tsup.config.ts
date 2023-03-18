import { defineConfig, type Options } from "tsup"

const baseOptions = {
  entry: ["src/**/*.ts"],
  outDir: ".",
  tsconfig: "tsconfig.json",
} satisfies Options

export default defineConfig([
  {
    ...baseOptions,
    format: "esm",
    dts: true,
    splitting: false,
  },
  {
    ...baseOptions,
    format: "cjs",
    dts: {
      compilerOptions: {
        target: "ES5",
        module: "commonjs",
        moduleResolution: "node",
      },
    },
  },
])
