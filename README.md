# Reproduction of Prisma Neon driver adapter issue on Next.js

### Steps

1. Spin up postgres with a neon proxy for local testing: `docker compose up -d`
2. Install deps `cd nextjs && npm install`
3. Start nextjs dev server `DATABASE_URL=postgres://postgres:postgres@localhost:5432/db npm run dev`
4. Call the nextjs route `POST http://localhost:3000/api/prisma`
5. See error in console
