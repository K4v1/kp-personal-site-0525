import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

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
      <header className="max-w-prose mx-auto flex justify-between items-center py-lg px-lg">
        <h1 className="text-3xl font-bold leading-none">
          Kavi<br />Pather
        </h1>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/kavipather/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://x.com/kavi_pather" target="_blank" rel="noopener noreferrer" className="hover:text-accent">X</a>
          <a href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a>
          <nav className="flex space-x-4 ml-4">
            <a href="#" className="hover:text-accent">Blog</a>
            <a href="#" className="hover:text-accent">Media Links</a>
            <a href="#" className="hover:text-accent">CV</a>
          </nav>
        </div>
      </header>
      <img src="/images/hero.jpg" alt="Cityscape" className="w-full h-64 object-cover" />
      <main className="max-w-prose mx-auto">
        <section className="py-xl px-lg">
          <p>
            I'm an AI and analytics leader working at the intersection of technology, business, and human potential. With a foundation in consulting and a passion for systems thinking, I help organizations not just adopt AI—but integrate it meaningfully to reimagine how they operate, compete, and serve. My work spans agentic AI, enterprise transformation, and real-world deployment across emerging markets, with a particular focus on financial services. I’m driven by a belief that the right combination of design, data, and judgement can unlock not only performance—but purpose.
          </p>
        </section>
        <section className="py-xl px-lg">
          <h2 className="text-2xl font-semibold mb-4">Updates</h2>
          <ul>
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
        <section className="py-xl px-lg">
          <p><strong>Kavi Pather</strong></p>
          <p><a href="mailto:email@example.com" className="text-blue-600 hover:text-accent">email@example.com</a></p>
          <p><strong>EY</strong></p>
          <p>Johannesburg</p>
        </section>
      </main>
      <footer className="py-lg text-center text-sm text-gray-500">© Kavi Pather</footer>
    </>
  );
}
