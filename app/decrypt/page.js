"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DecryptForm() {
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [error, setError] = useState("");

  // AES解密函数
  const decrypt = async () => {
    if (!key || !encryptedText) {
      setError("请填写密钥和加密文本");
      return;
    }

    try {
      // Base64解码
      const encryptedData = Uint8Array.from(atob(encryptedText), c => c.charCodeAt(0));
      
      // 提取IV (前12字节)
      const iv = encryptedData.slice(0, 12);
      const data = encryptedData.slice(12);
      
      // 将密钥转换为 ArrayBuffer
      const encoder = new TextEncoder();
      const keyData = encoder.encode(key);
      
      // 生成密钥摘要
      const keyDigest = await crypto.subtle.digest("SHA-256", keyData);
      
      // 导入密钥
      const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyDigest,
        { name: "AES-GCM" },
        false,
        ["decrypt"]
      );
      
      // 解密数据
      const decryptedData = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv
        },
        cryptoKey,
        data
      );
      
      // 转换为文本
      const decoder = new TextDecoder();
      const decryptedText = decoder.decode(decryptedData);
      
      setDecrypted(decryptedText);
      setError("");
    } catch (err) {
      setError("解密失败，请检查密钥和加密文本是否正确");
      setDecrypted("");
    }
  };

  return (
    <div>
      {/* SEO内容 */}
      <div className="sr-only">
        <h2>AES解密工具 - 在线解密加密数据</h2>
        <p>使用我们的AES解密工具，您可以解密之前使用本工具加密的数据。此工具采用AES-256-GCM解密算法，与加密工具完全匹配。</p>
        <h3>如何使用AES解密工具</h3>
        <ol>
          <li>输入您加密时使用的相同密钥</li>
          <li>粘贴您之前加密生成的文本</li>
          <li>点击"执行解密"按钮</li>
          <li>查看解密后的原始内容</li>
        </ol>
        <h3>解密安全性</h3>
        <p>我们的解密工具使用AES-256-GCM算法，这是军用级别的解密标准。解密过程完全在您的浏览器中进行，确保您的数据不会被上传到任何服务器。</p>
      </div>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
            AES解密工具
          </CardTitle>
          <CardDescription>使用AES-256-GCM算法解密您的加密信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="decrypt-key">密钥 (Key)</Label>
            <Input
              id="decrypt-key"
              type="password"
              placeholder="请输入解密密钥"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="py-5"
            />
            <p className="text-sm text-gray-500">请输入加密时使用的相同密钥</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="encrypted-text">加密文本</Label>
            <Textarea
              id="encrypted-text"
              placeholder="请输入需要解密的加密文本"
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
              className="min-h-[150px] font-mono"
            />
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={decrypt} 
              className="flex-1 py-6 bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              执行解密
            </Button>
          </div>
          
          {decrypted && (
            <div className="space-y-2 pt-4">
              <Label>解密结果</Label>
              <Textarea
                readOnly
                value={decrypted}
                className="min-h-[150px] bg-gray-50"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}