import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">PORTFOLIO</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-orange-500 transition-colors">ホーム</Link>
            <Link href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">自己紹介</Link>
            <Link href="#skills" className="text-gray-600 hover:text-orange-500 transition-colors">スキル</Link>
            <Link href="#projects" className="text-gray-600 hover:text-orange-500 transition-colors">プロジェクト</Link>
            <Link href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
