import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import path from "path";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

const manualChunks = (id) => path.parse(id).name;
const plugins = [
  nodeResolve(),
  PeerDepsExternalPlugin(),
  typescript(),
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ browser, displayName, globals = {}, source }) => [
  {
    external: Object.keys(globals),
    input: source,
    manualChunks,
    output: [
      {
        chunkFileNames: "[name].js",
        dir: "dist",
        format: "cjs",
      },
      {
        chunkFileNames: "[name].js",
        dir: "dist/es",
        format: "es",
      },
    ],
    plugins,
  },
  {
    external: Object.keys(globals),
    input: source,
    output: [
      {
        file: browser,
        format: "umd",
        globals,
        name: displayName,
        sourcemap: true,
      },
      {
        file: "dist/iife/index.js",
        format: "iife",
        globals,
        name: displayName,
      },
      {
        file: "dist/umd/index.min.js",
        format: "umd",
        globals,
        name: displayName,
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins,
  },
];
