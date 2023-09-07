module.exports = {
    output: 'standalone',
    images: {
      domains: [
        'firebasestorage.googleapis.com',
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; sandbox;",
      minimumCacheTTL: 60,
  },
    experimental: {
      appDir: true,
      typedRoutes: true,
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }
