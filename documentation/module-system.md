# Module System Guidelines

## Overview

This project strictly uses CommonJS modules for consistency and compatibility. This document outlines the guidelines and best practices for working with modules in this codebase.

## Rules

1. **Use CommonJS Syntax**
   - Use `require()` for imports
   - Use `module.exports` for exports
   - Never use ES modules syntax (`import`/`export`)

2. **File Extensions**
   - Use `.js` for all JavaScript files
   - Do not use `.mjs` or `.cjs` extensions

3. **Configuration Files**
   - All configuration files must use CommonJS syntax
   - This includes: next.config.js, postcss.config.js, tailwind.config.js, etc.

## Examples

### Component Exports
```js
// ✅ Correct
const MyComponent = ({ props }) => {
  // component code
};

module.exports = MyComponent;

// ❌ Incorrect
export default MyComponent;
```

### Multiple Exports
```js
// ✅ Correct
module.exports = {
  functionOne,
  functionTwo,
  constantValue
};

// ❌ Incorrect
export { functionOne, functionTwo, constantValue };
```

### Imports
```js
// ✅ Correct
const React = require('react');
const { useState, useEffect } = require('react');
const MyComponent = require('./MyComponent');

// ❌ Incorrect
import React from 'react';
import { useState, useEffect } from 'react';
import MyComponent from './MyComponent';
```

## Common Patterns

### React Components
```js
const React = require('react');

function MyComponent({ prop1, prop2 }) {
  return (
    <div>
      {/* component JSX */}
    </div>
  );
}

module.exports = MyComponent;
```

### Utility Functions
```js
function utilityOne() {
  // function code
}

function utilityTwo() {
  // function code
}

module.exports = {
  utilityOne,
  utilityTwo
};
```

### Next.js Pages
```js
const { useState } = require('react');
const MyComponent = require('../components/MyComponent');

function Page(props) {
  // page code
}

module.exports = Page;

// For getStaticProps/getServerSideProps
exports.getStaticProps = async () => {
  // props code
};
``` 