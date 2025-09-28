export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5174', 
        'http://localhost:3000', 
        'http://localhost:5173',
        'https://suits-frontend-git-main-toro-04s-projects.vercel.app',
        'https://suits-frontend-toro-04s-projects.vercel.app',
        'https://suits-frontend-omega.vercel.app', // Your new domain
        'https://suits-frontend.vercel.app' // In case you get this one too
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
  'strapi::public',
];
