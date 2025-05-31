import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Container from '../components/Container';

function LinkedInIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
    </svg>
  );
}

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
          <div className="flex justify-between items-center">
            <h1 className="mt-8 mb-4 text-3xl font-bold">Kavi Pather</h1>
            <nav className="mt-8">
              <ul className="flex gap-6">
                <li><a href="#" className="hover:text-accent">Blog</a></li>
                <li><a href="#" className="hover:text-accent">Media Links</a></li>
                <li><a href="#" className="hover:text-accent">CV</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end gap-6 mt-1 mb-8">
            <a
              href="https://github.com/k4v1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-gray-600"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavipather/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-gray-600"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/kavi_pather"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-gray-600"
              aria-label="X"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-gray-600"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </header>
      </Container>
      {/* reference image from the public folder */}
      <img src="/images/IMG_4753.jpeg" alt="Cityscape" className="w-full h-64 object-cover" />
      <Container>
        <main className="space-y-12">
          <section className="py-8">
            <p>
            I'm an AI and analytics leader working at the intersection of technology, business, and human potential. With a foundation in consulting and a passion for systems thinking, I help organizations not just adopt AI—but integrate it meaningfully to reimagine how they operate, compete, and serve. My work spans agentic AI, enterprise transformation, and real-world deployment across emerging markets, with a particular focus on financial services. I'm driven by a belief that the right combination of design, data, and judgement can unlock not only performance—but purpose.
          </p>
          </section>
          <section className="pb-12">
            <h2 className="text-2xl font-semibold mt-1 pt-1 border-t border-gray-200 mb-4">Updates</h2>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug} className="flex justify-between py-1">
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
