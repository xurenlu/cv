/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/default/zh',
        permanent: false
      },
      {
        source: '/default',
        destination: '/default/zh',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
