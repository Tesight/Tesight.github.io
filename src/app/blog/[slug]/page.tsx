import { posts } from "@velite";
import { notFound } from "next/navigation";
import * as runtime from "react/jsx-runtime";

// MDX 渲染组件：将字符串代码转为 React 组件
const MDXContent = ({ code }: { code: string }) => {
  const Component = new Function(code)({ ...runtime }).default;
  return <Component />;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 15 必须 await params
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-12 prose prose-slate dark:prose-invert">
      <header className="mb-8">
        <h1 className="mb-2">{post.title}</h1>
        {/* 如果你有 summary 字段也可以在这里渲染 */}
      </header>

      {/* 渲染正文内容，此时图片路径已自动解析为 /static/[hash].webp */}
      <MDXContent code={post.content} />
    </article>
  );
}

// 静态导出必须生成路径
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
