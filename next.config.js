/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 防止构建追踪导致的循环依赖问题
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'to-ico'],
  },
};

module.exports = nextConfig;