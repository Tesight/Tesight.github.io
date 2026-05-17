import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      {children}
    </section>
  );
}
