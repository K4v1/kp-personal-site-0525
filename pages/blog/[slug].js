import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Container from '../../components/Container';

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
      if (line.startsWith('# ')) return `<h1 class="mt-4 mb-3 text-3xl font-bold">${line.slice(2)}</h1>`;
      if (line.startsWith('## ')) return `<h2 class="mt-6 mb-3 text-2xl font-semibold">${line.slice(3)}</h2>`;
      if (!line.trim()) return '';
      return `<p class="mb-4">${line}</p>`;
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
    <Container>
      <article className="prose mx-auto py-8">
        <h1 className="mt-4 mb-3 text-3xl font-bold">{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Container>
  );
}
