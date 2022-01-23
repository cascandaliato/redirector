/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/get/:file/:password',
        destination: `${process.env.SECRETS_API_PROJECT_URL}/api/get?password=:password&file=:file`,
        permanent: false,
      },
      {
        source: '/gh/:repo/:commit',
        destination: 'https://github.com/cascandaliato/:repo/commit/:commit',
        permanent: false,
      },

    ]
  },
}
