import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDir).filter((n) => n.endsWith('.js'));
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.js$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postModule = await import(`../../content/posts/${params.slug}.js`);
  const { default: MDXContent, frontMatter } = postModule;
  const html = ReactDOMServer.renderToStaticMarkup(<MDXContent />);
  return { props: { frontMatter, html } };
}

export default function PostPage({ frontMatter, html }) {
  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
