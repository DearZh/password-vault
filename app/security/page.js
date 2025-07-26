import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SecurityInfo() {
  return (
    <div>
      {/* SEO内容 */}
      <div className="sr-only">
        <h2>密码保险箱安全说明 - 了解我们的安全实现原理、设计理念和最佳实践</h2>
        <p>密码保险箱是一个开源的纯前端AES加解密工具，所有操作均在浏览器完成，确保密钥和原始数据永不离开用户设备。</p>
        
        <h3>项目理念</h3>
        <h4>数字安全的个人主权</h4>
        <p>我们坚信每个人都应该拥有完全掌控自己敏感数据的能力。这个工具诞生于一个简单的理念：您的密码只应被您自己知晓。在数据泄露频发的时代，我们拒绝将密码安全托付给任何第三方服务，无论它们声称多么安全。</p>
        
        <h4>设计初衷</h4>
        <ul>
          <li>消除信任依赖：传统密码管理器要求您信任服务提供商，我们的方案让您只需要信任数学（AES）和自己</li>
          <li>技术民主化：通过开源代码将加密能力交到每个人手中，无需技术背景也能享受军用级加密保护</li>
          <li>零足迹原则：不在服务器存储任何数据（没有可被攻击的数据库），不在网络传输任何密钥（没有可被截获的通信）</li>
        </ul>
        
        <h3>工作原理</h3>
        <p>密码保险箱的工作原理是：[用户密钥] + [用户数据] → (浏览器内AES加密) → [加密数据] → 存储到任意地方</p>
        
        <h3>安全声明</h3>
        <ul>
          <li>隐私保护：本网站不会收集/传输/存储您的密钥或原始数据，无Cookie、无追踪、无数据分析</li>
          <li>本地处理：加密操作完全在您的浏览器中执行，数据永不离开您的设备（即使断网也可使用）</li>
          <li>开源验证：所有代码公开于GitHub，任何人都可以审查我们的实现（无隐藏逻辑）</li>
        </ul>
        
        <h3>密钥管理警告</h3>
        <ul>
          <li>数据丢失风险：丢失密钥等于永久丢失数据，请将密钥保存在比密码更安全的地方（如物理保险箱）</li>
          <li>密钥建议：使用强密码短语（建议16+字符），包含大小写字母、数字和特殊符号，避免使用常见短语或个人信息</li>
        </ul>
        
        <h3>我们的承诺</h3>
        <p>我们构建的不是另一个密码管理器，而是一把完全由您掌控的数字锁。当您拥有真正的控制权时，安全才真正有意义。</p>
        
        <h3>关键词</h3>
        <p>密码保险箱, AES加密, 在线加密工具, 数据安全, 隐私保护, 纯前端加密, AES-256-GCM, 密码管理, 加密解密, 浏览器加密</p>
      </div>

      <div className="space-y-6">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              安全说明
            </CardTitle>
            <CardDescription>了解我们的安全实现原理、设计理念和最佳实践</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">项目理念</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  数字安全的个人主权
                </h3>
                <p className="text-gray-600">
                  我们坚信每个人都应该拥有完全掌控自己敏感数据的能力。这个工具诞生于一个简单的理念：<strong className="text-indigo-600">您的密码只应被您自己知晓</strong>。在数据泄露频发的时代，我们拒绝将密码安全托付给任何第三方服务，无论它们声称多么安全。
                </p>
                
                <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  设计初衷
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">1.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">消除信任依赖</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        传统密码管理器要求您信任服务提供商<br/>
                        我们的方案让您只需要信任数学（AES）和自己
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-lg">2.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">技术民主化</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        通过开源代码将加密能力交到每个人手中<br/>
                        无需技术背景也能享受军用级加密保护
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-lg">3.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">零足迹原则</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        不在服务器存储任何数据 → 没有可被攻击的数据库<br/>
                        不在网络传输任何密钥 → 没有可被截获的通信
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">工作原理</h2>
              <div className="bg-gray-800 text-green-400 p-5 rounded-lg font-mono text-sm md:text-base">
                <div className="mb-3">[用户密钥] + [用户数据]</div>
                <div className="mb-3 text-center">→ (浏览器内AES加密) →</div>
                <div className="mb-3">[加密数据]</div>
                <div className="text-center">→ 存储到任意地方</div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">安全声明</h2>
              <div className="grid gap-4">
                <Alert>
                  <AlertTitle className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    隐私保护
                  </AlertTitle>
                  <AlertDescription className="text-base py-2">
                    🔒 本网站不会收集/传输/存储您的密钥或原始数据<br/>
                    🚫 无Cookie | 无追踪 | 无数据分析
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <AlertTitle className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    本地处理
                  </AlertTitle>
                  <AlertDescription className="text-base py-2">
                    💻 加密操作完全在您的浏览器中执行<br/>
                    🌐 数据永不离开您的设备（即使断网也可使用）
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <AlertTitle className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    开源验证
                  </AlertTitle>
                  <AlertDescription className="text-base py-2">
                    📜 所有代码公开于GitHub<br/>
                    👁️ 任何人都可以审查我们的实现（无隐藏逻辑）
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">密钥管理警告</h2>
              <div className="grid gap-4">
                <Alert variant="destructive">
                  <AlertTitle className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    数据丢失风险
                  </AlertTitle>
                  <AlertDescription className="text-base py-2">
                    ⚠️ <strong>丢失密钥 = 永久丢失数据</strong><br/>
                    请将密钥保存在比密码更安全的地方（如物理保险箱）
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <AlertTitle className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    密钥建议
                  </AlertTitle>
                  <AlertDescription className="text-base py-2">
                    🛡️ 使用强密码短语（建议16+字符）<br/>
                    🔀 包含大小写字母、数字和特殊符号<br/>
                    ❌ 避免使用常见短语或个人信息
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="space-y-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold border-b pb-2">我们的承诺</h2>
              <blockquote className="text-lg italic pl-4 border-l-4 border-white/30">
                "我们构建的不是另一个密码管理器，<br/>
                而是一把完全由您掌控的数字锁。<br/>
                当您拥有真正的控制权时，<br/>
                安全才真正有意义。"
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}