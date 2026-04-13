import { defineDocumentType, makeSource } from "contentlayer/source-files";

// 定义文章的数据结构
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`, // 匹配 posts 目录下的所有 mdx 文件
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    // 自动生成 URL 路径，例如 /blog/hello-world
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    // 提取文件名作为 slug
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts", // Markdown 文件存放的文件夹
  documentTypes: [Post],
});
