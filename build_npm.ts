import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./npm");

await build({
  compilerOptions: {
    lib: ["ESNext", "DOM"],
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
    version: "2.0.14",
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
    // files: [
    //   "esm",
    //   "types",
    // ],
  },
  typeCheck: "both",
  declaration: "inline",
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
