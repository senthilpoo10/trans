// // pong-app/backend/src/index.ts
// // Main server entry point
// import fastify, { FastifyInstance } from 'fastify';
// import fastifyCookie from '@fastify/cookie';
// import fastifyCors from '@fastify/cors';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import env from './env';
// import authRoutes from './routes/auth';
// import { PrismaClient } from '@prisma/client';

// // Get __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const prisma = new PrismaClient();

// async function buildServer() {

//   // Check multiple possible locations for SSL files
//   const possibleSSLDirs = [
//     path.join(__dirname, '../../tls'),      // Mounted volume location
//     path.join(__dirname, '../tls'),         // Alternative location
//     path.join(process.cwd(), 'tls'),        // Current working directory
//     '/app/tls',                             // Absolute path in container
//     '/ssl'                                  // Common SSL directory
//   ];

//   let certPath = '';
//   let keyPath = '';
//   let sslFilesExist = false;

//   // Check all possible locations
//   for (const sslDir of possibleSSLDirs) {
//     const currentCertPath = path.join(sslDir, 'cert.pem');
//     const currentKeyPath = path.join(sslDir, 'key.pem');
    
//     if (fs.existsSync(currentCertPath) && fs.existsSync(currentKeyPath)) {
//       certPath = currentCertPath;
//       keyPath = currentKeyPath;
//       sslFilesExist = true;
//       console.log(`SSL files found in: ${sslDir}`);
//       break;
//     }
//   }

//   if (!sslFilesExist) {
//     console.error('❌ SSL certificates not found! Server cannot start without HTTPS.');
//     console.error('Checked directories:', possibleSSLDirs);
//     console.error('Please provide SSL certificates in one of these locations:');
//     possibleSSLDirs.forEach(dir => console.error(`- ${dir}`));
//     process.exit(1); // exit instead of falling back to HTTP
//   }

//   console.log('🔐 Configuring server for HTTPS...');
//   console.log(`Certificate path: ${certPath}`);
//   console.log(`Key path: ${keyPath}`);
    
//    const serverOptions = {
//       https: {
//         key: fs.readFileSync(keyPath),
//         cert: fs.readFileSync(certPath),
//       },
//       logger: {
//         level: 'info',
//         transport: {
//           target: 'pino-pretty'
//         }
//       }
//     };
  

//   const server: FastifyInstance = fastify(serverOptions);

//   // Register cookie plugin
//   await server.register(fastifyCookie, {
//     secret: env.COOKIE_SECRET,
//     hook: 'onRequest'
//   });

//   // Register CORS with credentials
//   await server.register(fastifyCors, {
//     origin: [env.FRONTEND_URL],
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
//   });

//   // Register routes
//   server.register(authRoutes, { prisma });

//   // Health check endpoint
//   server.get('/health', async () => {
//     return { status: 'OK', timestamp: new Date().toISOString() };
//   });

//   return server;
// }

// async function startServer() {
//   try {
//     const server = await buildServer();
    
//     // Check database connection
//     await prisma.$connect();
//     console.log('✅ Database connected successfully');

//     const address = await server.listen({ 
//       port: env.PORT, 
//       host: '0.0.0.0' 
//     });

//     console.log(`🚀 Server listening securely at ${address}`);
//     console.log(`🩺 Health check available at ${address}/health`);
//   } catch (err) {
//     console.error('❌ Error starting server:', err);
//     process.exit(1);
//   }
// }

// // Handle graceful shutdown
// process.on('SIGINT', async () => {
//   console.log('Shutting down gracefully...');
//   await prisma.$disconnect();
//   process.exit(0);
// });

// process.on('SIGTERM', async () => {
//   console.log('Shutting down gracefully...');
//   await prisma.$disconnect();
//   process.exit(0);
// });

// startServer();



// pong-app/backend/src/index.ts
// Updated main server entry point with lobby routes
import fastify, { FastifyInstance } from 'fastify';
import fastifyCookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import env from './env';
import authRoutes from './routes/auth';
import lobbyRoutes from './routes/lobby'; // Import lobby routes
import { PrismaClient } from '@prisma/client';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function buildServer() {

  // Check multiple possible locations for SSL files
  const possibleSSLDirs = [
    path.join(__dirname, '../../tls'),      // Mounted volume location
    path.join(__dirname, '../tls'),         // Alternative location
    path.join(process.cwd(), 'tls'),        // Current working directory
    '/app/tls',                             // Absolute path in container
    '/ssl'                                  // Common SSL directory
  ];

  let certPath = '';
  let keyPath = '';
  let sslFilesExist = false;

  // Check all possible locations
  for (const sslDir of possibleSSLDirs) {
    const currentCertPath = path.join(sslDir, 'cert.pem');
    const currentKeyPath = path.join(sslDir, 'key.pem');
    
    if (fs.existsSync(currentCertPath) && fs.existsSync(currentKeyPath)) {
      certPath = currentCertPath;
      keyPath = currentKeyPath;
      sslFilesExist = true;
      console.log(`SSL files found in: ${sslDir}`);
      break;
    }
  }

  if (!sslFilesExist) {
    console.error('❌ SSL certificates not found! Server cannot start without HTTPS.');
    console.error('Checked directories:', possibleSSLDirs);
    console.error('Please provide SSL certificates in one of these locations:');
    possibleSSLDirs.forEach(dir => console.error(`- ${dir}`));
    process.exit(1);
  }

  console.log('🔐 Configuring server for HTTPS...');
  console.log(`Certificate path: ${certPath}`);
  console.log(`Key path: ${keyPath}`);
    
   const serverOptions = {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      },
      logger: {
        level: 'info',
        transport: {
          target: 'pino-pretty'
        }
      }
    };

  const server: FastifyInstance = fastify(serverOptions);

  // Register cookie plugin
  await server.register(fastifyCookie, {
    secret: env.COOKIE_SECRET,
    hook: 'onRequest'
  });

  // Register CORS with credentials
  await server.register(fastifyCors, {
    origin: [env.FRONTEND_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  });

  // Register routes
  server.register(authRoutes, { prisma });
  server.register(lobbyRoutes, { prisma }); // Register lobby routes

  // Health check endpoint
  server.get('/health', async () => {
    return { status: 'OK', timestamp: new Date().toISOString() };
  });

  // User status update middleware - updates lastActive on each request
  server.addHook('preHandler', async (request, reply) => {
    const token = request.cookies.authToken;
    if (token) {
      try {
        const { verifyToken } = await import('./utils/auth');
        const decoded = verifyToken(token) as { userId: string };
        
        // Update user's last active time
        await prisma.user.update({
          where: { id: decoded.userId },
          data: { lastActive: new Date() }
        }).catch(() => {
          // Ignore errors (user might not exist, token might be invalid, etc.)
        });
      } catch (error) {
        // Ignore token verification errors here
      }
    }
  });

  return server;
}

async function startServer() {
  try {
    const server = await buildServer();
    
    // Check database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    const address = await server.listen({ 
      port: env.PORT, 
      host: '0.0.0.0' 
    });

    console.log(`🚀 Server listening securely at ${address}`);
    console.log(`🩺 Health check available at ${address}/health`);
    console.log(`🏓 Lobby API available at ${address}/lobby/*`);
  } catch (err) {
    console.error('❌ Error starting server:', err);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

startServer();