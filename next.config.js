module.exports = {
    output: 'standalone',
    env: {
      REGION_CODE: process.env.REGION_CODE,
      S3_BUCKET: process.env.S3_BUCKET,
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      COGNITO_USER_POOL_CLIENT_ID: process.env.COGNITO_USER_POOL_CLIENT_ID,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
      BESTNOTES_PUBLIC: process.env.BESTNOTES_PUBLIC,
      BESTNOTES_PRIVATE: process.env.BESTNOTES_PRIVATE
    },
    images: {
      domains: [
        'firebasestorage.googleapis.com',
        'ccfil.com',
        'ccfil-app-storage-4da25038161600-staging.s3.us-east-1.amazonaws.com'
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; sandbox;",
      minimumCacheTTL: 60,
      unoptimized: true,
  },
    experimental: {
      typedRoutes: true,
    },
    swcMinify: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }
