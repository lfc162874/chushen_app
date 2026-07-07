import Fastify from 'fastify';
import { registerApp } from './app.js';

const server = Fastify({
  logger: true
});

await registerApp(server);

await server.listen({
  host: '0.0.0.0',
  port: 3000
});
