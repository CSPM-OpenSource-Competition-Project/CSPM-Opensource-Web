/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/signup',
        destination: 'http://localhost:8080/api/signup',
      },
    ]
  },
}

export default nextConfig
