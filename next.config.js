module.exports = {
    output: 'standalone',
    env: {
      NEXT_PUBLIC_REGION_CODE: process.env.NEXT_PUBLIC_REGION_CODE,
      NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
      NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
      NEXT_PUBLIC_S3_BUCKET: process.env.NEXT_PUBLIC_S3_BUCKET,
      NEXT_PUBLIC_S3_BUCKET_URL: process.env.NEXT_PUBLIC_S3_BUCKET_URL,
      NEXT_PUBLIC_S3_BUCKET_DOMAIN: process.env.NEXT_PUBLIC_S3_BUCKET_DOMAIN,
      NEXT_PUBLIC_COGNITO_USER_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
      BESTNOTES_PUBLIC: process.env.BESTNOTES_PUBLIC,
      BESTNOTES_PRIVATE: process.env.BESTNOTES_PRIVATE,
      IMAGES_URL: process.env.IMAGES_URL,
    },
    images: {
      domains: [
        'ccfil.com',
        'images.ccfil.com',
        'ccfil-app-storage-4da25038161600-staging.s3.amazonaws.com',
      ],
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/ccfil-app-storage-4da25038161600-staging/public/**',
        },
        {
        protocol: 'https',
        hostname: 'images.ccfil.com',
        port: '',
        pathname: '/public/images/**',
        },
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
