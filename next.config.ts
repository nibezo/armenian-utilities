const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  runtimeCaching: [
    {
      urlPattern: /^https?.*\.(png|jpg|jpeg|svg|gif|webp|ico)/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
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
      urlPattern: /^https?.*\/$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});
