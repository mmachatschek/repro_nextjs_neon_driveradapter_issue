# Reproduction of Prisma Neon driver adapter issue on Next.js

### Steps

1. Spin up postgres with a neon proxy for local testing: `docker compose up -d`
1. Install deps `cd nextjs && npm install`
1. Migrate `DATABASE_URL=postgres://postgres:postgres@localhost:5432/db npm run migrate`
1. Add a record in the database on the `Article` table
1. Start nextjs dev server `DATABASE_URL=postgres://postgres:postgres@localhost:5432/db npm run dev`
1. Call the nextjs route `POST http://localhost:3000/api/prisma`
1. See error in console
