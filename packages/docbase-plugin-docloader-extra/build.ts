import { zodToJsonSchema } from "zod-to-json-schema";
import { schema } from "./index"
import { write } from "bun";

Promise.all(
    [
        Bun.build({
            entrypoints: ["./index.ts"],
            outdir: "./dist",
            minify: true,
            target: "bun",
        }),
        write("dist/schema.json", JSON.stringify(zodToJsonSchema(schema), null, 2))
    ]
)
