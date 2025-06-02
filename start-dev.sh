#!/bin/bash

# Error handling
set -e

handle_error() {
    local exit_code=$1
    local line_no=$2
    echo "Error occurred in script at line: $line_no"
    echo "Exit code: $exit_code"
    cleanup
    exit $exit_code
}

trap 'handle_error $? $LINENO' ERR

# Function to clean up
cleanup() {
    echo "Cleaning up previous build artifacts..."
    rm -rf .next docs node_modules package-lock.json next.config.* package.json postcss.config.* tailwind.config.*
}

# Function to setup build directories
setup_build_dirs() {
    echo "Setting up build directories..."
    mkdir -p docs/{cache/webpack/{client-development,server-development},server}
    chmod -R 755 docs
}

# Function to install dependencies
install_deps() {
    echo "Installing dependencies..."
    cat > package.json << 'EOF'
{
  "name": "kp-personal-site-0525",
  "version": "1.0.0",
  "private": true,
  "description": "New personal website",
  "type": "module",
  "scripts": {
    "dev": "next dev -p ${PORT:-3000}",
    "build": "next build",
    "start": "next start",
    "serve": "npx serve docs -p 3000",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/typography": "^0.5.10",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "serve": "^14.2.1"
  }
}
EOF
    npm install
}

# Function to ensure correct Next.js configuration
setup_nextjs_config() {
    echo "Setting up Next.js configuration..."
    cat > next.config.mjs << 'EOF'
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
EOF

    # Create PostCSS config
    cat > postcss.config.mjs << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

    # Create Tailwind config
    cat > tailwind.config.mjs << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#10A37F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        xl: '4rem',
        lg: '2rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      }
    },
  },
  plugins: [
    '@tailwindcss/typography'
  ],
}
EOF
}

# Function to validate environment
validate_env() {
    echo "Validating environment..."
    # Check Node.js version
    node -v | grep -q "v24" || echo "Warning: Project tested with Node.js v24"
    # Check if required directories exist
    [ -d "pages" ] || echo "Warning: pages directory missing"
    [ -d "components" ] || echo "Warning: components directory missing"
}

# Function to build and serve static site
serve_static() {
    echo "Building static site..."
    npm run build
    echo "Starting static file server on port 3000..."
    npm run serve
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [dev|static]"
    echo "  dev    - Start development server (default)"
    echo "  static - Build and serve static site from docs directory"
}

# Main execution
echo "Starting development environment setup..."

cleanup
setup_build_dirs
install_deps
setup_nextjs_config
validate_env

# Handle command line argument
case "${1:-dev}" in
    "dev")
        echo "Starting Next.js development server..."
        npm run dev
        ;;
    "static")
        serve_static
        ;;
    *)
        show_usage
        exit 1
        ;;
esac 