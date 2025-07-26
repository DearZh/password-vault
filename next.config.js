/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 添加构建配置以避免循环依赖
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'to-ico'],
  },
  // 配置忽略文件模式
  excludeFile: (path) => {
    // 忽略公共目录下的生成图标文件
    if (path.includes('/public/') && 
        (path.endsWith('favicon-16x16.png') || 
         path.endsWith('favicon-32x32.png') || 
         path.endsWith('apple-touch-icon.png') || 
         path.endsWith('favicon.ico'))) {
      return true;
    }
    return false;
  }
};

module.exports = nextConfig;