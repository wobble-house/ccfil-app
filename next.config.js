module.exports = {
    output: 'standalone',
    env: {
      REGION_CODE: process.env.REGION_CODE,
      S3_BUCKET: process.env.S3_BUCKET,
      S3_BUCKET_URL: process.env.S3_BUCKET_URL,
      S3_BUCKET_DOMAIN: process.env.S3_BUCKET_DOMAIN,
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
        'ccfil.com',
        'ccfil-app-storage-4da25038161600-staging.s3.amazonaws.com',
      ],
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/ccfil-app-storage-4da25038161600-staging/public/**',
        },
    ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; sandbox;",
      minimumCacheTTL: 60,
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
