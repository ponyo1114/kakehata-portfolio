import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">PORTFOLIO</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-600 hover:text-orange-500 transition-colors">
                ホーム
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                自己紹介
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-orange-500 transition-colors">
                スキル
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-orange-500 transition-colors">
                プロジェクト
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">こんにちは！</p>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                田中太郎です
                <br />
              </h1>
              <div className="w-24 h-1 bg-white"></div>
              <p className="text-xl text-gray-300">フルスタック開発者</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">作品を見る</Button>
            </div>
            <div className="relative">
              <div className="bg-orange-500 w-full h-96 lg:h-[600px] flex items-center justify-center">
                <div className="text-white text-6xl md:text-8xl font-bold transform rotate-90 origin-center">
                  田中太郎
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
                  <strong>私の名前は田中太郎で、フルスタック開発者をしています。</strong>
                </p>
                <p>
                  React、Node.js、クラウド技術を使用したモダンなWebアプリケーションの開発を専門としています。5年以上の経験を持ち、スタートアップから大手企業まで、ビジネス成長を促進するスケーラブルなソリューションの構築に携わってきました。
                </p>
                <p>
                  クリーンなコード、ユーザーエクスペリエンス、最新技術への対応に情熱を注いでいます。コーディング以外の時間は、新しいフレームワークの探求、オープンソースプロジェクトへの貢献、ジュニア開発者のメンタリングを行っています。
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Profile"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center text-black">スキル</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">フロントエンド</h3>
              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  React
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Vue.js
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">バックエンド</h3>
              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Python
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  GraphQL
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">ツール</h3>
              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  AWS
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Docker
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Git
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
                  Vercel
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">
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
          <h2 className="text-5xl font-bold mb-16 text-center text-black">プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=250&width=400`}
                      alt={`Project ${project}`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        プロジェクトを見る
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">ECプラットフォーム</h3>
                    <p className="text-gray-600 mb-4">
                      React、Node.js、Stripe統合を使用したフルスタックECソリューション。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
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
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8">お問い合わせ</h2>
              <p className="text-xl text-gray-300 mb-8">
                一緒に働きませんか？あなたのプロジェクトについてお聞かせください。アイデアを実現するためのお手伝いをさせていただきます。
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <span>tanaka.taro@email.com</span>
                </div>
                <div className="flex space-x-6 mt-8">
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    <Github className="w-8 h-8" />
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 田中太郎. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
