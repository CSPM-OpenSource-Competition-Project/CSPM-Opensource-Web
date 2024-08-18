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
}

export default nextConfig
