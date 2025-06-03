const Layout = require('../components/Layout');
const Container = require('../components/Container');
const formatDate = require('../utils/formatDate');

function Home({ posts = [] }) {
  return (
    <Layout>
      <Container>
        <div className="py-12">
          <div className="mb-12">
            <img 
              src="/images/IMG_4753.jpeg" 
              alt="Kavi Pather" 
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            />
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm an AI and analytics leader with over a decade of experience in building and scaling data-driven solutions. Currently, I lead EY's AI practice in Africa, India & Middle East, where I help organizations harness the power of artificial intelligence and analytics to drive business value.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Updates</h2>
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((post) => (
                <article key={post.slug} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                  <time className="text-sm text-gray-600 font-mono">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    <a href={`/blog/${post.slug}`} className="text-accent hover:text-accent-dark">
                      {post.title}
                    </a>
                  </h3>
                  {post.summary && (
                    <p className="text-gray-700">{post.summary}</p>
                  )}
                </article>
              ))
            ) : (
              <p className="text-gray-600">No updates available at the moment.</p>
            )}
          </section>
        </div>
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

module.exports = Home;
