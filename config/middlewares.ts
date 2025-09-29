export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:', 'ws:', 'wss:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
            'http:',
            'market-assets.strapi.io',
            'suitsbackend-production.up.railway.app',
            '*.railway.app',
            '*.vercel.app'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
            'http:',
            'market-assets.strapi.io',
            'suitsbackend-production.up.railway.app',
            '*.railway.app',
            '*.vercel.app'
          ],
          'font-src': ["'self'", 'https:', 'data:'],
          'style-src': ["'self'", "'unsafe-inline'", 'https:'],
          'script-src': ["'self'"],
          upgradeInsecureRequests: null,
        },
      },
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: { policy: "cross-origin" },
      originAgentCluster: false,
      referrerPolicy: { policy: ["origin", "same-origin"] }
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:5173',
        'https://suits-frontend-toro-04s-projects.vercel.app',
        'https://suitsbackend-production.up.railway.app',
        'https://suits-frontend-git-main-toro-04s-projects.vercel.app',
        'https://suits-frontend-h9v0qu87j-toro-04s-projects.vercel.app',
        'https://navkiran-suits.vercel.app',
        // Add wildcard patterns for Vercel preview deployments
        /^https:\/\/suits-frontend-.*\.vercel\.app$/,
        /^https:\/\/navkiran-suits-.*\.vercel\.app$/
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: [
        'Content-Type', 
        'Authorization', 
        'Origin', 
        'Accept', 
        'X-Requested-With',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers'
      ],
      credentials: true,
      keepHeaderOnError: true,
      exposedHeaders: ['Content-Range', 'X-Content-Range'],
      maxAge: 86400, // 24 hours
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      path: './public',
      maxAge: 60000 * 60 * 24 * 30, // 30 days cache
    },
  },
];