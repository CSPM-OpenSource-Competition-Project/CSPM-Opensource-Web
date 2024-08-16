/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ]
  },

  env: {
    NEXT_PUBLIC_NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    NEXT_PUBLIC_NEXT_APP_DOMAIN_URL: process.env.NEXT_APP_DOMAIN_URL,
  },
}

export default nextConfig
