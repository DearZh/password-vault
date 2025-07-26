const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs').promises;
const path = require('path');

// 确保public目录存在
const publicDir = path.join(__dirname, '../public');

async function generateFavicon() {
  try {
    // 检查SVG文件是否存在
    const svgPath = path.join(publicDir, 'icon.svg');
    try {
      await fs.access(svgPath);
    } catch (err) {
      console.log('SVG图标文件不存在，跳过生成favicon');
      return;
    }
    
    // 确保public目录存在
    try {
      await fs.access(publicDir);
    } catch (err) {
      await fs.mkdir(publicDir, { recursive: true });
    }
    
    // 生成16x16 favicon
    await sharp(svgPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    
    // 生成32x32 favicon
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    
    // 生成Apple Touch Icon
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    
    // 生成favicon.ico (包含多个尺寸)
    const sizes = [16, 32, 48];
    const images = await Promise.all(
      sizes.map(size => 
        sharp(svgPath)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    const icoBuffer = await toIco(images);
    await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
    
    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error.message);
    // 即使出错也不中断构建过程
    console.log('Continuing with build process...');
  }
}

// 只有直接运行此脚本时才执行生成函数
if (require.main === module) {
  generateFavicon().then(() => {
    console.log('Favicon generation script completed');
  });
}

module.exports = { generateFavicon };