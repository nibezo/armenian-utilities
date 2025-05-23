const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  runtimeCaching: [
    {
      urlPattern: /^\/$/,
      handler: "CacheFirst",
      options: {
        cacheName: "html-cache",
        expiration: { maxEntries: 10, maxAgeSeconds: 24 * 60 * 60 },
      },
    },

    {
      urlPattern: /^https?.*\.(js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /^https?.*\.(json|txt|xml)$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "data",
        expiration: { maxEntries: 20 },
      },
    },
    {
      urlPattern: /^https?:\/\/.+\/$/, // Кешируем главную страницу и любые URL с слешем на конце
      handler: "CacheFirst", // CacheFirst для оффлайна
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60, // 1 день
        },
      },
    },
  ],
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA({
  reactStrictMode: true,
});
