import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Guide, GuideMetadata } from "./types";

const contentDirectory = path.join(process.cwd(), "content");

// Guide/Content Functions (Server-side only)
export function getAllGuides(): Guide[] {
  const guidesDir = path.join(contentDirectory, "guides");

  if (!fs.existsSync(guidesDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(guidesDir);
  const guides = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(guidesDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...(data as GuideMetadata),
        content,
      } as Guide;
    });

  return guides.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(contentDirectory, "guides", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data as GuideMetadata),
    content,
  } as Guide;
}

export function getFeaturedGuides(): Guide[] {
  const allGuides = getAllGuides();
  return allGuides.filter((guide) => guide.featured);
}
