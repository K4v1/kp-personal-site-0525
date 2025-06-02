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
    rm -rf .next docs node_modules package-lock.json next.config.* package.json
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
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
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
const config = {
  output: "export",
  trailingSlash: true,
  distDir: "docs",
  experimental: {
    // Add experimental features if needed
  }
};

export default config;
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

# Function to start development server
start_dev() {
    echo "Starting development server..."
    npm run dev
}

# Function to build static site
build_static() {
    echo "Building static site..."
    npm run build
}

# Main script
case "$1" in
    "build")
        cleanup
        validate_env
        install_deps
        setup_build_dirs
        setup_nextjs_config
        build_static
        echo "Static site built successfully in the 'docs' directory"
        ;;
    "dev" | "")
        cleanup
        validate_env
        install_deps
        setup_build_dirs
        setup_nextjs_config
        start_dev
        ;;
    *)
        echo "Usage: $0 [build|dev]"
        echo "  build - Build the static site"
        echo "  dev   - Start development server (default)"
        exit 1
        ;;
esac 