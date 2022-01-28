/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: `/get/:file/:password(${process.env.SECRETS_API_PASSWORD})`,
        destination: `${process.env.SECRETS_API_URL}/api/get?password=:password&file=:file`,
        permanent: false,
      },
      {
        source: '/gh/:repo/:commit',
        destination: 'https://github.com/cascandaliato/:repo/commit/:commit',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: `/get2/:file/:password(${process.env.SECRETS_API_PASSWORD})`,
        destination: `${process.env.SECRETS_API_URL}/api/get?password=:password&file=:file`,
      },
    ]
  },
}
