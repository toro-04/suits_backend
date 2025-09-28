export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://suitsbackend-production.up.railway.app'], // Add your Railway domain
          'media-src': ["'self'", 'data:', 'blob:', 'https://suitsbackend-production.up.railway.app'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5174', 
        'http://localhost:3000', 
        'http://localhost:5173',
        'https://suits-frontend-git-main-toro-04s-projects.vercel.app',
        'https://suits-frontend-toro-04s-projects.vercel.app',
        'https://suits-frontend-omega.vercel.app',
        'https://suits-frontend.vercel.app'
      ], 
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      defer: false, // Make sure static files are served with CORS headers
    },
  },
];
