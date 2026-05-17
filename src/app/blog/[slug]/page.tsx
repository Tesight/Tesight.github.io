import { posts } from "@velite";
import { notFound } from "next/navigation";
import * as runtime from "react/jsx-runtime";

const MDXContent = ({ code }: { code: string }) => {
  const Component = new Function(code)({ ...runtime }).default;
  return <Component />;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="rag-article mx-auto max-w-3xl rounded-lg border border-[#ded6c7] bg-[#fffdf8]/95 px-5 py-8 shadow-[0_24px_70px_rgba(74,60,38,0.12)] sm:px-10 sm:py-12 lg:max-w-4xl">
      <header className="mb-10 border-b border-[#ded6c7] pb-8">
        {post.date && (
          <time className="mb-4 block font-sans text-sm font-semibold tracking-[0.16em] text-[#0f766e] uppercase">
            {post.date}
          </time>
        )}
        <h1 className="mb-4 font-sans text-4xl leading-tight font-black tracking-normal text-[#101827] sm:text-5xl">
          {post.title}
        </h1>
        {post.summary && (
          <p className="max-w-2xl text-lg leading-8 text-[#435166]">
            {post.summary}
          </p>
        )}
      </header>

      <div className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:tracking-normal prose-headings:text-[#101827] prose-p:text-[#18212f] prose-li:text-[#18212f] prose-strong:text-[#101827] prose-code:text-[#0f4c45] prose-pre:bg-[#1e293b]">
        <MDXContent code={post.content} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
