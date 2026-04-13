import './globals.css'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="mx-auto max-w-2xl px-6 py-12">
        {/* prose 是 tailwindcss/typography 提供的样式 
          它可以让 MDX 里的 h1, p, ul 自动获得漂亮的外观
      */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </body>
    </html>
  );
}
