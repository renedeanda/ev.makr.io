import { getGuideBySlug, getAllGuides } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import DisclaimerBox from "@/components/DisclaimerBox";

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: `${guide.title} | ev.makr.io`,
    description: guide.description,
    keywords: guide.tags,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const components = {
    DisclaimerBox,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-neutral-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to All Guides
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-charcoal mb-6">
            {guide.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{guide.description}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                Updated {new Date(guide.updatedDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{guide.readingTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span className="capitalize">{guide.category}</span>
            </div>
          </div>

          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* MDX Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-neutral-charcoal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-charcoal prose-code:text-electric-blue prose-code:bg-neutral-light prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-charcoal prose-pre:text-white prose-table:border-collapse prose-th:bg-neutral-light prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-gray-300 prose-img:rounded-lg">
          <MDXRemote source={guide.content} components={components} />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/guides"
              className="text-electric-blue hover:text-electric-blue/80 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to All Guides
            </Link>
            <Link
              href="/vehicles"
              className="border-2 border-electric-blue text-electric-blue px-6 py-3 rounded-lg font-semibold hover:bg-electric-blue/10 transition-colors"
            >
              Browse EVs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
