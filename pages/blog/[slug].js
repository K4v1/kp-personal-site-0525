import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDir).filter((n) => n.endsWith('.md'));
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

function markdownToHtml(md) {
  return md
    .split('\n')
    .map((line) => {
      if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
      if (!line.trim()) return '';
      return `<p>${line}</p>`;
    })
    .join('\n');
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  const frontMatter = { ...data, date: String(data.date) };
  const html = markdownToHtml(content);
  return { props: { frontMatter, html } };
}

export default function PostPage({ frontMatter, html }) {
  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
