import './globals.css'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="mx-auto max-w-2xl px-6 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </body>
    </html>
  );
}
