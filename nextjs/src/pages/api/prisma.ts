import { types, neonConfig, Pool } from '@neondatabase/serverless';
import ws from 'ws';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

neonConfig.webSocketConstructor = ws;

// Set the WebSocket proxy to work with the local instance
neonConfig.wsProxy = (host) => `${host}:5433/v1`;
// Disable all authentication and encryption
neonConfig.useSecureWebSocket = false;
neonConfig.pipelineTLS = false;
neonConfig.pipelineConnect = false;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaNeon(pool);
const prisma = new PrismaClient({ adapter });

// function normalize_timestamp(time) {
//   return time;
// }

// types.setTypeParser(types.builtins.TIMESTAMP, normalize_timestamp);

export default async function handler(req, res) {
  const articles = await prisma.article.findMany();

  console.log(articles);

  res.status(200).send('OK');
}
