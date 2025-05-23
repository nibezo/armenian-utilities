const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    // 1. Cache main HTML pages (document)
    {
      urlPattern: ({ request }: { request: Request }) =>
        request.destination === "document",
      handler: "CacheFirst",
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },

    // 2. Cache static resources like JS, CSS
    {
      urlPattern: /^https?.*\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },

    // 3. Cache data files like JSON, TXT, XML
    {
      urlPattern: /^https?.*\.(?:json|txt|xml)$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "data",
        expiration: {
          maxEntries: 20,
        },
      },
    },

    // 4. Cache images
    {
      urlPattern: /^https?.*\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});
