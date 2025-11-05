// server.ts - Standard Next.js development server
import { createServer } from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const hostname = '0.0.0.0';

// When running Next.js in development mode, you don't need a custom server
// This is just a placeholder - the real dev server runs via `next dev`
const app = createServer({
  dev,
  port,
  hostname,
});

app.prepare().then(() => {
  console.log('> Ready on http://0.0.0.0:3000');
  console.log('> Next.js development server started');
});
// Trigger restart
