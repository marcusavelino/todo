/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = {
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tarefas',
        permanent: true,
      },
    ]
  },
}
