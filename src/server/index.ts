import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel"
import { authRouter } from "./routers/auth-router"
import { categoryRouter } from "./routers/category-router"
import { paymentRouter } from "./routers/payment-router"
import { projectRouter } from "./routers/project-router"

const app = new Hono().basePath("/api").use(cors())

 
const appRouter = app
  .route("/auth", authRouter)
  .route("/category", categoryRouter)
  .route("/payment", paymentRouter)
  .route("/project", projectRouter)
 
export const httpHandler = handle(app)
 
export default app

 
export type AppType = typeof appRouter
