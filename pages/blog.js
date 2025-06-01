import Layout from '../components/Layout';
import Container from '../components/Container';
import { formatDate } from '../utils/date';
import { loadBlogPosts } from '../utils/blog';

export async function getStaticProps() {
  const posts = await loadBlogPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Layout title="Blog - Kavi Pather">
      <Container>
        <main className="space-y-8">
          <section className="pt-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <p className="text-xl text-gray-700 mb-12">
              Thoughts on AI, technology, business transformation, and leadership.
            </p>
          </section>

          <section className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row">
                  <div className="text-sm text-gray-600 font-mono whitespace-nowrap md:w-32 md:pt-2">
                    {formatDate(post.date)}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2">
                      <a href={`/blog/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-700 mb-4">
                      {post.summary}
                    </p>
                    <a href={`/blog/${post.slug}`} className="text-accent hover:text-accent-dark">
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </Container>
    </Layout>
  );
} 