import withMDX from '@next/mdx';

export default withMDX({
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  pageExtensions: ['js', 'jsx', 'mdx']
});
