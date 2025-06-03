/**
 * @fileoverview Blog post loading utility
 * 
 * NOTE: This project uses CommonJS modules.
 * Always use require() and module.exports syntax.
 * Do not use import/export syntax.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Get all blog posts with metadata
 * @returns {Array<{slug: string, title: string, date: string, excerpt: string}>}
 */
function getBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Blog posts directory not found:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, excerpt } = matter(fileContents, { excerpt: true });

        return {
          slug,
          ...data,
          excerpt: excerpt || ''
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return allPostsData;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The post slug
 * @returns {{slug: string, title: string, date: string, content: string} | null}
 */
function getBlogPost(slug) {
  try {
    const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

module.exports = {
  getBlogPosts,
  getBlogPost
}; 