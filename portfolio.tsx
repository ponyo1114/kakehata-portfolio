import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">PORTFOLIO</div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                ホーム
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                自己紹介
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                スキル
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                プロジェクト
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-black text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                掛端宗介
                <br />
              </h1>
              <div className="w-24 h-1 bg-white"></div>
              <p className="text-xl text-gray-300">フロントエンジニア</p>
            </div>
            <div className="relative">
              <div className="bg-green-500 w-full h-96 lg:h-[600px] flex items-center justify-center">
                <div className="text-white text-6xl md:text-8xl font-bold transform rotate-90 origin-center">
                  Kakehata<br />Sosuke
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-black">自己紹介</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  <strong className="whitespace-nowrap">
                    長岡技術科学大学 工学部 情報・経営システム工学分野
                    3学年の掛端宗介です。
                  </strong>
                </p>
                <p className="whitespace-nowrap">
                  技大祭実行委員の情報局に所属しており、フロントエンドに興味があります。
                </p>
                <p>主にHtml,CSS,TypeScriptについて勉強しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            スキル
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                フロントエンド
              </h3>
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Html
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  CSS
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                バックエンド
              </h3>
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Java
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Python
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  C++
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                ツール
              </h3>
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Git
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Vercel
                </Badge>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 mr-2 mb-2"
                >
                  Figma
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">
            プロジェクト
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card
                key={project}
                className="group hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-400">
                        Coming Soon
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        準備中
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-gray-600 mb-4">現在準備中です。</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">お問い合わせ</h2>
            <form className="space-y-6 mb-12">
              <div>
                <Input
                  type="text"
                  placeholder="お名前"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="メールアドレス"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="件名"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="メッセージ"
                  rows={6}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                メッセージを送信
              </Button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <span>kakesou1114@gmail.com</span>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <Link
                  href="https://github.com/ponyo1114"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <Github className="w-8 h-8" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <Twitter className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 掛端宗介. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
