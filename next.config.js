module.exports = {
    output: 'standalone',
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    },
    images: {
      domains: [
        'firebasestorage.googleapis.com',
        'ccfil.com'
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; sandbox;",
      minimumCacheTTL: 60,
  },
    experimental: {
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
