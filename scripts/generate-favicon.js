const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs').promises;
const path = require('path');

// 确保public目录存在
const publicDir = path.join(__dirname, '../public');

// 从SVG生成不同尺寸的favicon
async function generateFavicon() {
  try {
    const svgPath = path.join(publicDir, 'icon.svg');
    
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
    console.error('Error generating favicons:', error);
  }
}

generateFavicon();