/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost8080/:path*',
      },
    ]
  },
}

export default nextConfig
export default nextConfig
