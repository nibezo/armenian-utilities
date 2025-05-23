const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  runtimeCaching: [
    // Cache all HTML pages (including dynamic routes)
    {
      urlPattern: /^https?.*\.html$/,
      handler: "CacheFirst",
      options: {
        cacheName: "html-cache",
        expiration: { maxEntries: 20, maxAgeSeconds: 24 * 60 * 60 },
      },
    },

    // Cache all routes/pages (with or without trailing slash)
    {
      urlPattern: /^https?:\/\/.+\/?$/,
      handler: "CacheFirst",
      options: {
        cacheName: "page-cache",
        expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
      },
    },

    // JS and CSS - StaleWhileRevalidate for fast loading and update in background
    {
      urlPattern: /^https?.*\.(js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },

    // Data files (JSON, TXT, XML) - CacheFirst for offline use
    {
      urlPattern: /^https?.*\.(json|txt|xml)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "data-cache",
        expiration: { maxEntries: 20, maxAgeSeconds: 24 * 60 * 60 },
      },
    },

    // Images
    {
      urlPattern: /^https?.*\.(png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },

    // Fonts
    {
      urlPattern: /^https?.*\.(woff|woff2|ttf|otf)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "font-cache",
        expiration: { maxEntries: 30, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },
  ],
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA({
  reactStrictMode: true,
});
