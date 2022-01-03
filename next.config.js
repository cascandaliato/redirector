/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/get/:path*',
        destination: '/api/get/:path*',
        permanent: true,
      },
    ]
  },
}
