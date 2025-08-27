import { OpenAPIHono } from "@hono/zod-openapi"
import { requestId } from "hono/request-id";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";
// import { logger } from "../middleware/logger.js";


export function createRouter() {
  return new OpenAPIHono({ strict: false, defaultHook })
}

export default function createApp() {

  const app = createRouter();
  app.use(serveEmojiFavicon("📊"));
  app.use(requestId());
  // app.use(logger())

  app.notFound(notFound);
  app.onError(onError);

  return app;
}