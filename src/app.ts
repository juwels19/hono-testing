import db from "./db/index.js";
import createApp from "./lib/create-app.js";

const app = createApp()

const welcomeStrings = [
  'Hello Hono!',
  'To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono'
]

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

app.get('/seasons', async (c) => {
  const seasons = await db.query.seasons.findMany();
  return c.json(seasons, 200)
})

export default app;