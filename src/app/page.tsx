import Link from "next/link";
import { posts } from "@velite";

export default function Home() {
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.date || "").getTime() - new Date(a.date || "").getTime(),
  );

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Tesight 技术</h1>
      </header>

      <div className="space-y-12">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="group flex flex-col items-start">
            <time className="text-sm text-gray-400 mb-2">
              {post.date || "2026-04-13"}
            </time>

            <h2 className="text-2xl font-bold">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            {post.summary && (
              <p className="text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                {post.summary}
              </p>
            )}

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                阅读全文 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
