import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center text-black">スキル</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">フロントエンド</h3>
            <div className="space-y-3">
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">TypeScript</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Html</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">CSS</Badge>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">バックエンド</h3>
            <div className="space-y-3">
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Java</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Python</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">C++</Badge>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">ツール</h3>
            <div className="space-y-3">
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Git</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Vercel</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2 mr-2 mb-2">Figma</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}