Bun.build({
    entrypoints: ["./src/main.ts"],
    outdir: "./dist",
    target: "bun",
    sourcemap: 'linked',
    minify: true,
})