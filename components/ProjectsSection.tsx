import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-100/50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center text-black">プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">Coming Soon</span>
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
  );
}
