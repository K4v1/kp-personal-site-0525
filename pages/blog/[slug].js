import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { formatDate } from '../../utils/date';

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
      // Headers
      if (line.startsWith('# ')) return `<h1 class="text-4xl font-bold mb-6">${line.slice(2)}</h1>`;
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-semibold mt-8 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.slice(4)}</h3>`;
      
      // Horizontal Rule
      if (line.startsWith('---')) return `<hr class="my-8 border-t border-gray-200" />`;
      
      // Emphasis
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // Empty Lines
      if (!line.trim()) return '';
      
      // Regular Paragraphs
      return `<p class="mb-4 leading-relaxed text-gray-800">${line}</p>`;
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
    <Layout title={`${frontMatter.title} - Kavi Pather`}>
      <Container>
        <article className="max-w-3xl mx-auto py-12">
          <header className="mb-8">
            <time className="text-sm text-gray-600 font-mono">
              {formatDate(frontMatter.date)}
            </time>
            <h1 className="text-4xl font-bold mt-2 mb-4">{frontMatter.title}</h1>
            {frontMatter.summary && (
              <p className="text-xl text-gray-700">{frontMatter.summary}</p>
            )}
          </header>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }} 
          />
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a href="/blog" className="text-accent hover:text-accent-dark">
              ← Back to blog
            </a>
          </div>
        </article>
      </Container>
    </Layout>
  );
}
