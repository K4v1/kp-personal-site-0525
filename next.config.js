const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

module.exports = withMDX({
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  pageExtensions: ['js', 'jsx', 'mdx']
})
