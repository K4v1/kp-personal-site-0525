import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Container from '../components/Container';

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDir).filter((n) => n.endsWith('.md'));
  const posts = filenames
    .map((name) => {
      const file = fs.readFileSync(path.join(postsDir, name), 'utf8');
      const { data } = matter(file);
      return { ...data, date: String(data.date) };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kavi Pather</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>
      <Container>
        <header className="pt-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="mt-8 mb-4 text-3xl font-bold">Kavi Pather</h1>
              <nav className="mt-2">
                <ul className="flex gap-6 sm:flex-col sm:items-start">
                  <li><a href="#" className="mr-6 hover:text-blue-700 underline">Blog</a></li>
                  <li><a href="#" className="mr-6 hover:text-blue-700 underline">Media Links</a></li>
                  <li><a href="#" className="hover:text-blue-700 underline">CV</a></li>
                </ul>
              </nav>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kavipather/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
              <a href="https://x.com/kavi_pather" target="_blank" rel="noopener noreferrer" className="hover:text-accent">X</a>
              <a href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a>
            </div>
          </div>
        </header>
      </Container>
      <img src="/images/hero.jpg" alt="Cityscape" className="w-full h-64 object-cover" />
      <Container>
        <main className="space-y-12">
          <section className="py-8">
            <p>
            I'm an AI and analytics leader working at the intersection of technology, business, and human potential. With a foundation in consulting and a passion for systems thinking, I help organizations not just adopt AI—but integrate it meaningfully to reimagine how they operate, compete, and serve. My work spans agentic AI, enterprise transformation, and real-world deployment across emerging markets, with a particular focus on financial services. I’m driven by a belief that the right combination of design, data, and judgement can unlock not only performance—but purpose.
          </p>
          </section>
          <section className="pt-8 pb-12">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Updates</h2>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug} className="flex justify-between py-1 border-b">
                  <span className="w-40 text-right font-mono text-sm text-gray-600">
                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <a href={`/blog/${post.slug}`} className="ml-4 hover:text-accent">
                    {post.summary}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <a href="#" className="hover:text-accent">More…</a>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
