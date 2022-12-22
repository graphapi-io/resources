import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.API_URL as string]: {
        headers: {
          "x-api-key": process.env.API_KEY || "",
        },
      },
    },
  ],
  documents: "src/api/**/*.graphql",
  generates: {
    "src/generated/types.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        typesPrefix: "I",
        enumPrefix: false,
        declarationKind: "interface",
        namingConvention: {
          transformUnderscore: true,
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#constantCase",
        },
      },
    },
  },
};

export default config;
