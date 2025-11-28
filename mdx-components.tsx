import type { MDXComponents } from 'mdx/types';
import DisclaimerBox from '@/components/DisclaimerBox';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allow custom components
    DisclaimerBox,
    // Add any custom styling for default elements if needed
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
    p: ({ children }) => <p className="text-gray-700 leading-relaxed my-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-gray-700 ml-4">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-electric-blue hover:underline">
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-neutral-light p-3 text-left font-semibold border border-gray-300">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="p-3 border border-gray-300">{children}</td>
    ),
    code: ({ children }) => (
      <code className="text-electric-blue bg-neutral-light px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-charcoal text-white p-4 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-electric-blue pl-4 italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-gray-300" />,
    strong: ({ children }) => <strong className="font-bold text-neutral-charcoal">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    ...components,
  };
}
