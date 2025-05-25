import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.mdx?$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  return { props: { frontMatter: data, content } };
}

export default function PostPage({ frontMatter, content }) {
  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
