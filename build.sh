#!/bin/bash

# Exit on any error
set -e

echo "Starting build process..."

# 1. Clean any existing build artifacts
echo "1. Cleaning up previous build artifacts..."
rm -rf docs
rm -rf .next

# 2. Install dependencies
echo "2. Installing dependencies..."
npm install

# 3. Build the site
echo "3. Building the site..."
npm run build

echo "Build completed successfully!" 