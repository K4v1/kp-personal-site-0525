import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Container from '../components/Container';

export async function getStaticProps() {
  const linksPath = path.join(process.cwd(), 'content', 'links.json');
  const socialPath = path.join(process.cwd(), 'content', 'social.json');
  const links = JSON.parse(fs.readFileSync(linksPath, 'utf8'));
  const social = JSON.parse(fs.readFileSync(socialPath, 'utf8'));
  return { props: { links, social } };
}

export default function LinksPage({ links, social }) {
  return (
    <>
      <Head>
        <title>Links | Kavi Pather</title>
        <meta name="description" content="Curated conference talks, press coverage and podcasts featuring Kavi Pather." />
        <link rel="canonical" href="https://www.kavipather.com/links" />
      </Head>
      <Container>
        <header className="pt-4">
          <div className="flex justify-between items-center">
            <h1 className="mt-8 mb-4 text-3xl font-bold">Kavi Pather</h1>
            <nav className="mt-8">
              <ul className="flex gap-6">
                <li><a href="/" className="hover:text-blue-700 underline">Home</a></li>
                <li><a href="/blog" className="hover:text-blue-700 underline">Blog</a></li>
                <li><a href="/links" className="hover:text-blue-700 underline">Links</a></li>
                <li><a href="#" className="hover:text-blue-700 underline">About</a></li>
                <li><a href="#" className="hover:text-blue-700 underline">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kavipather/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            <a href="https://twitter.com/kavi_pather" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Twitter</a>
            <a href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a>
          </div>
        </header>
      </Container>
      <Container>
        <main className="space-y-12 py-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Links to Articles &amp; Talks</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {links.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-4 flex justify-between hover:text-accent"
                >
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4">Follow</h2>
            <ul className="space-y-2">
              {social.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {link.title} <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </Container>
    </>
  );
}
