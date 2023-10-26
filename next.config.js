module.exports = {
    output: 'standalone',
    env: {
      NEXT_PUBLIC_AWS_REGION_CODE: process.env.NEXT_PUBLIC_AWS_REGION_CODE,
      NEXT_PUBLIC_AWS_S3_BUCKET: process.env.NEXT_PUBLIC_AWS_S3_BUCKET,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
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
