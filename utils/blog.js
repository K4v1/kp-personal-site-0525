import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * @typedef {Object} BlogPost
 * @property {string} slug - The URL slug for the post
 * @property {string} title - The post title
 * @property {string} date - The post date
 * @property {string} summary - A brief summary of the post
 */

/**
 * Load all blog posts sorted by date
 * @returns {Promise<BlogPost[]>} Array of blog posts
 */
export async function loadBlogPosts() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDir).filter((n) => n.endsWith('.md'));
  
  const posts = filenames
    .map((name) => {
      const file = fs.readFileSync(path.join(postsDir, name), 'utf8');
      const { data } = matter(file);
      const slug = name.replace(/\.md$/, '');
      return { ...data, slug, date: String(data.date) };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  return posts;
} 