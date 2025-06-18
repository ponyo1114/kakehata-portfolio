import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
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
  );
}
