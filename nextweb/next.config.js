/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  rewrites() {
    return[
      {
        Source: '/:path*',
        destination: '/:path*'
      },
      {
        Source: '/:path*',
        destination: 'http://localhost:4000/:path*'
      },
      {
        Source: '/',
        destination: 'http://localhost:4000/'
      }
    ]
  }
}
