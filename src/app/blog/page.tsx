import Link from "next/link";
import { posts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AgentAudit | Sécurité des agents IA",
  description: "Articles et guides sur la sécurité des agents IA, les prompt injections et les bonnes pratiques d'audit.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Blog</span> — Sécurité des agents IA
            </h1>
            <p className="text-dark-400">
              Guides, analyses et bonnes pratiques pour sécuriser vos agents IA.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-2xl bg-dark-900/30 border border-dark-800/50 hover:border-brand-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 text-xs text-dark-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-dark-400 text-sm">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
