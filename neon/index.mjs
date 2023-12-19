import { types, neonConfig, Pool } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

// Set the WebSocket proxy to work with the local instance
neonConfig.wsProxy = (host) => `${host}:5433/v1`;
// Disable all authentication and encryption
neonConfig.useSecureWebSocket = false;
neonConfig.pipelineTLS = false;
neonConfig.pipelineConnect = false;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function normalize_timestamp(time) {
  return time;
}

types.setTypeParser(types.builtins.TIMESTAMP, normalize_timestamp);

(async () => {
  const client = await pool.connect();

  console.log(await client.query('SELECT * FROM "Article" LIMIT 1;'));

  process.exit();
})();
