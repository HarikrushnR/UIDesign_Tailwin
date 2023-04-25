/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['faceapp.com', 'themoviedb.org'],
  },
}

module.exports = nextConfig
