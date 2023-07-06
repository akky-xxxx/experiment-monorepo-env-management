import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
  HOST: z.string(),
  PORT: z.string(),
});

export const bffEnvironment = schema.parse(process.env);
