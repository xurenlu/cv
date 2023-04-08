/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/default/zh',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
