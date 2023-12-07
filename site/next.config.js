/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Workspaces',
    description: 'Kasm Workspaces for Mtp Lab env.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/tperrindell/kasm-registry/',
    contactUrl: 'none',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
