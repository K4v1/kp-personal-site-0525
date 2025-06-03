const Layout = require('../components/Layout');
const Container = require('../components/Container');
const formatDate = require('../utils/formatDate');

function Blog({ posts = [] }) {
  return (
    <Layout title="Blog - Kavi Pather">
      <Container>
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="mb-12 pb-8 border-b border-gray-200 last:border-b-0">
                <time className="text-sm text-gray-600 font-mono">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-2xl font-semibold mt-2 mb-3">
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="hover:text-accent"
                  >
                    {post.title}
                  </a>
                </h2>
                {post.summary && (
                  <p className="text-gray-700 leading-relaxed">{post.summary}</p>
                )}
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-block mt-4 text-accent hover:text-accent-dark"
                >
                  Read more →
                </a>
              </article>
            ))
          ) : (
            <p className="text-gray-600">No blog posts available at the moment.</p>
          )}
        </section>
      </Container>
    </Layout>
  );
}

exports.getStaticProps = async () => {
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  try {
    const postsDir = path.join(process.cwd(), 'content/blog');
    
    // Check if directory exists
    if (!fs.existsSync(postsDir)) {
      console.warn('Blog posts directory does not exist:', postsDir);
      return { props: { posts: [] } };
    }

    const filenames = fs.readdirSync(postsDir).filter((n) => n.endsWith('.md'));
    
    const posts = filenames
      .map((name) => {
        try {
          const file = fs.readFileSync(path.join(postsDir, name), 'utf8');
          const { data } = matter(file);
          const slug = name.replace(/\.md$/, '');
          return { ...data, slug, date: String(data.date) };
        } catch (error) {
          console.error(`Error processing blog post ${name}:`, error);
          return null;
        }
      })
      .filter(Boolean) // Remove any null entries from failed processing
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      props: {
        posts
      }
    };
  } catch (error) {
    console.error('Failed to load blog posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
};

module.exports = Blog; 