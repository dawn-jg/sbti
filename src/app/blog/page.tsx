import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "人格测试百科",
  description: "蜂巢测试博客——MBTI、九型人格、SBTI等心理学测试的深度解读、类型分析和自我成长指南。",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
        人格测试百科
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        关于人格心理学测试的深度内容，帮你更好地理解自己和他人。
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
          >
            <span className="text-3xl mb-3 block">{post.emoji}</span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors mb-2">
              {post.titleZh}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {post.excerptZh}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readMin} 分钟阅读</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
