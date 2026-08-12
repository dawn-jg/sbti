import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.titleZh,
    description: post.excerptZh,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">文章未找到</h1>
        <Link href="/blog" className="text-indigo-600 hover:underline mt-4 block">← 返回博客</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-5 py-16">
      <Link href="/blog" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-6 inline-block">
        ← 返回百科
      </Link>

      <span className="text-4xl mb-4 block">{post.emoji}</span>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
        {post.titleZh}
      </h1>
      <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readMin} 分钟阅读</span>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300 space-y-5">
        {post.contentZh.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href={post.testLink}
          className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
        >
          免费测试 {post.testLabel}
        </Link>
      </div>

      {/* Related posts - topic cluster interlinking */}
      {(() => {
        const related = blogPosts.filter((p) => p.slug !== post.slug && p.testLink === post.testLink);
        if (related.length === 0) return null;
        return (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">相关阅读</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                >
                  <span className="text-2xl mr-2">{r.emoji}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{r.titleZh}</span>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{r.excerptZh}</p>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}
    </article>
  );
}
