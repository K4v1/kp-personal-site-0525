import Layout from '../components/Layout';
import { formatDate } from '../utils/date';
import { loadBlogPosts } from '../utils/blog';

export async function getStaticProps() {
  const posts = await loadBlogPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout title="Kavi Pather">
      <div className="relative">
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img 
            src="/images/IMG_4753.jpeg" 
            alt="Cityscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg -mt-8 relative z-10 mx-auto max-w-3xl px-6">
          <div className="p-8">
            <section className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I'm an AI and analytics leader working at the intersection of technology, business, and human potential. With a foundation in consulting and a passion for systems thinking, I help organizations not just adopt AI—but integrate it meaningfully to reimagine how they operate, compete, and serve. My work spans agentic AI, enterprise transformation, and real-world deployment across emerging markets, with a particular focus on financial services. I'm driven by a belief that the right combination of design, data, and judgement can unlock not only performance—but purpose.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 pt-6 border-t border-gray-200">Updates</h2>
              <div className="space-y-2">
                {posts.map((post) => (
                  <div key={post.slug} className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                    <span className="text-sm text-gray-600 font-mono whitespace-nowrap mb-1 md:mb-0">
                      {formatDate(post.date)}
                    </span>
                    <a href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.summary}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <a href="/blog" className="hover:text-accent">More…</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
