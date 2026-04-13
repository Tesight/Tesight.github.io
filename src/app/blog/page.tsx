import Link from "next/link";
import { posts } from "@velite";

export default function BlogListPage() {
  // 按照日期倒序排列（如果有 date 字段的话）
  const sortedPosts = posts.sort((a, b) => b.slug.localeCompare(a.slug));

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">技术博客</h1>
      <ul className="space-y-4">
        {sortedPosts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:text-blue-600 transition-colors"
            >
              {post.title}
            </Link>
            {post.metadata?.readingTime && (
              <p className="text-sm text-gray-500 mt-1">
                阅读时间：{post.metadata.readingTime} 分钟
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
