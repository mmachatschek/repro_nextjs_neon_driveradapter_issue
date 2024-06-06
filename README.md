# Reproduction of Prisma Neon driver adapter issue on Next.js

### Steps

1. Spin up postgres with a neon proxy for local testing: `docker compose up -d`
1. Install deps `cd nextjs && npm install`
1. Migrate `npm run migrate`
1. Add a record in the database on the `Article` table (e.g. via `npx prisma studio`)
1. Start nextjs dev server `npm run dev`
1. Open `http://localhost:3000/api/prisma`
1. See error in browser and console
