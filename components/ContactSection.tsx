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
          <div className="flex items-center justify-center space-x-6 mt-8">
            <a
              href="https://mail.google.com/mail/?view=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="Gmailでメール作成"
            >
              <Mail className="text-gray-300 hover:text-orange-500 transition-colors" />
            </a>
            <Link
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
