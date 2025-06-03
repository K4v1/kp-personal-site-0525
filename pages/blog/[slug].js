const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const Layout = require('../../components/Layout');
const Container = require('../../components/Container');
const formatDate = require('../../utils/formatDate');

function PostPage({ frontMatter = {}, html = '' }) {
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

exports.getStaticPaths = async () => {
  try {
    const postsDir = path.join(process.cwd(), 'content/blog');
    const filenames = fs.readdirSync(postsDir).filter(n => n.endsWith('.md'));
    const paths = filenames.map((filename) => ({
      params: { slug: filename.replace(/\.md$/, '') },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error('Failed to generate static paths:', error);
    return { paths: [], fallback: false };
  }
};

exports.getStaticProps = async ({ params }) => {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
    const file = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(file);
    const frontMatter = { ...data, date: String(data.date) };
    const html = marked(content);
    return { props: { frontMatter, html } };
  } catch (error) {
    console.error('Failed to load blog post:', error);
    return {
      notFound: true
    };
  }
};

module.exports = PostPage;
