import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";

await emptyDir("./npm");

await build({
  compilerOptions: {
    lib: ["esnext", "dom"],
  },
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  scriptModule: false,
  rootTestDir: "./tests",
  package: {
    name: "@i-xi-dev/collection",
    version: "1.0.2",
    description: "This is not for direct usage.",
    license: "MIT",
    author: "i-xi-dev",
    homepage: "https://github.com/i-xi-dev/collection.es#readme",
    keywords: [],
    repository: {
      type: "git",
      url: "git+https://github.com/i-xi-dev/collection.es.git",
    },
    bugs: {
      url: "https://github.com/i-xi-dev/collection.es/issues",
    },
    publishConfig: {
      access: "public",
    },
    files: [
      "esm",
      "types",
    ],
  },
  importMap: "./import_map.json",

  //
  typeCheck: false, // 落ちるようになった
  declaration: false, // 落ちるようになった
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
