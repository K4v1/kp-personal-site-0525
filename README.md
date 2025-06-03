# Personal Website

A Next.js-based personal website.

## Development Guidelines

### Module System

This project uses CommonJS modules exclusively. When working with this codebase:

- Use `require()` for imports
- Use `module.exports` for exports
- Do not use ES modules syntax (`import`/`export`)
- File extensions should be `.js` (not `.mjs`)

Example:
```js
// ✅ Correct
const express = require('express');
module.exports = MyComponent;

// ❌ Incorrect
import express from 'express';
export default MyComponent;
```

### Configuration Files

All configuration files (next.config.js, postcss.config.js, etc.) must use CommonJS syntax.
