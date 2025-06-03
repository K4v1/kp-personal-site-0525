/**
 * @fileoverview Next.js configuration file
 * 
 * NOTE: This project uses CommonJS modules.
 * Always use require() and module.exports syntax.
 * Do not use import/export syntax.
 */

/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false
    };
    return config;
  }
};
