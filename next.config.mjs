/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "docs",
  experimental: {
    esmExternals: "loose"
  },
  webpack: (config) => {
    // Handle ESM modules
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx'],
        '.jsx': ['.jsx', '.tsx']
      }
    };
    return config;
  }
};

export default nextConfig;
