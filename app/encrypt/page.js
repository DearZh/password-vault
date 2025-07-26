"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function EncryptForm() {
  const [key, setKey] = useState("");
  const [plaintext, setPlaintext] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // AES加密函数
  const encrypt = async () => {
    if (!key || !plaintext) {
      setError("请填写密钥和待加密文本");
      return;
    }

    try {
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
        ["encrypt"]
      );
      
      // 生成随机IV
      const iv = crypto.getRandomValues(new Uint8Array(12));
      
      // 加密数据
      const encodedPlaintext = encoder.encode(plaintext);
      const encryptedData = await crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv
        },
        cryptoKey,
        encodedPlaintext
      );
      
      // 合并IV和加密数据
      const combined = new Uint8Array(iv.length + encryptedData.byteLength);
      combined.set(iv, 0);
      combined.set(new Uint8Array(encryptedData), iv.length);
      
      // Base64编码
      const base64Result = btoa(String.fromCharCode(...combined));
      setEncrypted(base64Result);
      setError("");
    } catch (err) {
      setError("加密过程中发生错误: " + err.message);
      setEncrypted("");
    }
  };

  const copyToClipboard = () => {
    if (encrypted) {
      navigator.clipboard.writeText(encrypted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      {/* SEO内容 */}
      <div className="sr-only">
        <h2>AES加密工具 - 在线加密敏感信息</h2>
        <p>使用我们的AES加密工具，您可以安全地加密密码、个人信息和其他敏感数据。此工具采用AES-256-GCM加密算法，是目前最安全的加密标准之一。</p>
        <h3>如何使用AES加密工具</h3>
        <ol>
          <li>输入您的加密密钥（建议使用强密码短语）</li>
          <li>输入您想要加密的文本内容</li>
          <li>点击"执行加密"按钮</li>
          <li>复制生成的加密结果并安全存储</li>
        </ol>
        <h3>加密安全性</h3>
        <p>我们的加密工具使用AES-256-GCM算法，这是军用级别的加密标准。每次加密都会生成一个随机的初始化向量（IV），确保相同的明文不会产生相同的密文。</p>
      </div>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            AES加密工具
          </CardTitle>
          <CardDescription>使用AES-256-GCM算法加密您的敏感信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="encrypt-key">密钥 (Key)</Label>
            <Input
              id="encrypt-key"
              type="password"
              placeholder="请输入加密密钥"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="py-5"
            />
            <p className="text-sm text-gray-500">建议使用强密码短语（12+字符）</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="plaintext">待加密文本</Label>
            <Textarea
              id="plaintext"
              placeholder="请输入需要加密的文本内容"
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="min-h-[150px]"
            />
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={encrypt} 
              className="flex-1 py-6 bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              执行加密
            </Button>
          </div>
          
          {encrypted && (
            <div className="space-y-2 pt-4">
              <Label>加密结果</Label>
              <div className="relative">
                <Textarea
                  readOnly
                  value={encrypted}
                  className="min-h-[150px] font-mono bg-gray-50"
                />
                <Button
                  onClick={copyToClipboard}
                  className="absolute top-3 right-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
                  variant="secondary"
                >
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      已复制
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      复制
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-gray-500">加密结果已包含IV和认证标签，可安全存储</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}