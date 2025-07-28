import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.zhinengyaoshi.cn'),
  title: {
    default: '密码保险箱 - 纯前端AES加解密工具',
    template: '%s | 密码保险箱'
  },
  description: '开源的纯前端网站，使用AES-256-GCM加密算法，让用户安全地加密/解密敏感信息。所有操作均在浏览器完成，确保密钥和原始数据永不离开用户设备。',
  keywords: '密码保险箱, AES加密, 在线加密, 密码管理, 数据安全, 隐私保护, 纯前端加密, AES-256-GCM',
  authors: [{ name: '密码保险箱团队' }],
  creator: '密码保险箱团队',
  publisher: '密码保险箱团队',
  robots: 'index, follow',
  applicationName: '密码保险箱',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: '密码保险箱 - 纯前端AES加解密工具',
    description: '开源的纯前端网站，使用AES-256-GCM加密算法，让用户安全地加密/解密敏感信息。所有操作均在浏览器完成，确保密钥和原始数据永不离开用户设备。',
    url: 'https://www.zhinengyaoshi.cn',
    siteName: '密码保险箱',
    images: [
      {
        url: 'https://www.zhinengyaoshi.cn/og-image.png',
        width: 1200,
        height: 630,
        alt: '密码保险箱 - 纯前端AES加解密工具',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '密码保险箱 - 纯前端AES加解密工具',
    description: '开源的纯前端网站，使用AES-256-GCM加密算法，让用户安全地加密/解密敏感信息。',
    creator: '@yourusername',
  },
  alternates: {
    canonical: 'https://www.zhinengyaoshi.cn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="密码保险箱团队" />
        
        {/* Microsoft Clarity 跟踪代码 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "slw7zlxiat");
            `,
          }}
        />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "密码保险箱",
            "url": "https://www.zhinengyaoshi.cn",
            "description": "开源的纯前端网站，使用AES-256-GCM加密算法，让用户安全地加密/解密敏感信息。",
            "applicationCategory": "Security Tool",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}