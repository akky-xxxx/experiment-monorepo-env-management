import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
  NEXT_PUBLIC_VAR: z.string(),
  NEXT_PUBLIC_VAR2: z.string(),
  // next のルールに基づいて取得できないため zod error が出る
  // VAR: z.string(),
});

export const clientEnvironment = schema.parse({
  // next 経由のため、プロパティアクセスのみで取得できる
  NEXT_PUBLIC_VAR: process.env.NEXT_PUBLIC_VAR,
  NEXT_PUBLIC_VAR2: process.env.NEXT_PUBLIC_VAR2,
});
