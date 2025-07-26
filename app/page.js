"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EncryptForm from './encrypt/page';
import DecryptForm from './decrypt/page';
import SecurityInfo from './security/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* SEO优化内容 - 屏幕阅读器可见但对普通用户不显眼 */}
      <div className="sr-only">
        <h1>密码保险箱 - 纯前端AES加解密工具</h1>
        <p>密码保险箱是一个开源的在线加密工具，使用AES-256-GCM加密算法保护您的敏感信息。所有加密和解密操作都在您的浏览器中完成，确保您的密钥和数据永远不会上传到任何服务器。</p>
        <h2>主要功能</h2>
        <ul>
          <li>AES加密工具 - 使用AES-256-GCM算法加密密码和其他敏感信息</li>
          <li>AES解密工具 - 解密使用本工具加密的数据</li>
          <li>安全说明 - 了解我们的安全实现原理和最佳实践</li>
        </ul>
        <h2>为什么选择密码保险箱</h2>
        <p>密码保险箱采用零信任安全模型，所有操作都在您的浏览器本地完成。我们不收集、不传输、不存储您的任何数据，确保您的隐私得到最大程度的保护。</p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            密码保险箱
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            纯前端AES加解密工具，所有操作均在浏览器完成，确保您的数据安全
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <Tabs defaultValue="encrypt" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white p-1 rounded-xl shadow-sm">
              <TabsTrigger tabValue="encrypt">
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  加密工具
                </span>
              </TabsTrigger>
              <TabsTrigger tabValue="decrypt">
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  解密工具
                </span>
              </TabsTrigger>
              <TabsTrigger tabValue="security">
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  安全说明
                </span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent tabValue="encrypt">
              <EncryptForm />
            </TabsContent>
            
            <TabsContent tabValue="decrypt">
              <DecryptForm />
            </TabsContent>
            
            <TabsContent tabValue="security">
              <SecurityInfo />
            </TabsContent>
          </Tabs>
        </main>

        <footer className="text-center py-8 mt-12 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 密码保险箱 - 纯前端AES加解密工具</p>
          <p className="mt-2">所有操作均在浏览器本地完成，数据不会上传至任何服务器</p>
        </footer>
      </div>
    </div>
  );
}