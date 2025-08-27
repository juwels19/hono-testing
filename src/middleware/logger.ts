import { pinoLogger } from "hono-pino";
import env from "../env.js";

export function logger() {
  return pinoLogger({
    pino: {
      level: env.LOG_LEVEL,
      ...(env.NODE_ENV !== "production"
        ? {
          transport: {
            target: "pino-pretty",
          },
        }
        : {}),
    },
  });
}
