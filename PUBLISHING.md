# 📦 Publishing WindFlow to NPM

Follow these steps to publish WindFlow as an npm package:

## Prerequisites

1. **Create an NPM account** at https://www.npmjs.com/signup
2. **Verify your email** address
3. **Install Node.js** (version 14 or higher)

## Step 1: Prepare for Publishing

### 1.1 Update package.json

Edit the `package.json` file with your information:

```json
{
  "name": "windflow-css",  // or your preferred package name
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/windflow.git"
  },
  "homepage": "https://github.com/yourusername/windflow#readme",
  "bugs": {
    "url": "https://github.com/yourusername/windflow/issues"
  }
}
```

### 1.2 Add .npmignore

Create a `.npmignore` file:

```
# Development files
*.log
.DS_Store
node_modules/
.env

# Source files (optional - if you only want to ship dist)
src/
examples/
tests/

# Config files
.gitignore
.eslintrc
```

### 1.3 Build the Distribution

```bash
cd windflow
npm install
npm run build
```

## Step 2: Test Locally

### 2.1 Create a Local Package

```bash
npm pack
```

This creates `windflow-css-1.0.0.tgz`

### 2.2 Test Installation

In another directory:

```bash
npm install /path/to/windflow/windflow-css-1.0.0.tgz
```

## Step 3: Login to NPM

```bash
npm login
```

Enter your username, password, and email.

## Step 4: Publish to NPM

### 4.1 First-time Publishing

```bash
npm publish
```

### 4.2 Publishing Updates

1. Update version in `package.json`:
   - Patch release (bug fixes): `1.0.0` → `1.0.1`
   - Minor release (new features): `1.0.0` → `1.1.0`
   - Major release (breaking changes): `1.0.0` → `2.0.0`

2. Publish:
```bash
npm version patch  # or minor/major
npm publish
```

## Step 5: Create a GitHub Repository

### 5.1 Initialize Git

```bash
git init
git add .
git commit -m "Initial commit"
```

### 5.2 Create Repository on GitHub

1. Go to https://github.com/new
2. Name it `windflow`
3. Don't initialize with README (you already have one)
4. Create repository

### 5.3 Push to GitHub

```bash
git remote add origin https://github.com/yourusername/windflow.git
git branch -M main
git push -u origin main
```

### 5.4 Create a Release

1. Go to your repo on GitHub
2. Click "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `WindFlow v1.0.0`
5. Describe the release features
6. Publish release

## Step 6: Make it Global (Optional)

To allow global installation:

### 6.1 Update package.json

```json
{
  "bin": {
    "windflow": "./cli.js"
  }
}
```

### 6.2 Users can install globally:

```bash
npm install -g windflow-css
windflow init
```

## Marketing Your Package

### 1. **Create a Landing Page**

Create a simple GitHub Pages site:

1. Create `docs/index.html` in your repo
2. Enable GitHub Pages in Settings
3. Your site will be at: `https://yourusername.github.io/windflow`

### 2. **Write a Blog Post**

Share on:
- Dev.to
- Hashnode
- Medium
- Your personal blog

### 3. **Share on Social Media**

- Twitter/X: Tag relevant accounts like @tailwindcss
- LinkedIn: Share in web development groups
- Reddit: r/webdev, r/css, r/Frontend

### 4. **Submit to Lists**

- Awesome CSS: https://github.com/awesome-css-group/awesome-css
- CSS Framework lists
- Product Hunt

### 5. **Create Examples**

- CodePen demos
- CodeSandbox templates
- Stackblitz examples

## Package Naming Suggestions

If `windflow` is taken, consider:
- `windflow-css`
- `windflowcss`
- `wind-flow`
- `wflow-css`
- `windstyle`

## Maintenance Tips

1. **Respond to Issues**: Check GitHub issues regularly
2. **Update Dependencies**: Keep packages up to date
3. **Semantic Versioning**: Follow semver strictly
4. **Changelog**: Maintain a CHANGELOG.md file
5. **Documentation**: Keep README current

## Example Installation Instructions for Users

Once published, users can install WindFlow:

```bash
# Install locally
npm install windflow-css

# Or with Yarn
yarn add windflow-css

# Or globally
npm install -g windflow-css
```

Then in their HTML:
```html
<link rel="stylesheet" href="node_modules/windflow-css/dist/windflow.css">
```

Or import in JavaScript:
```javascript
import 'windflow-css/dist/windflow.css';
```

## Success Metrics

Track your package success:
- NPM weekly downloads
- GitHub stars
- Issues and PRs
- Community feedback

Good luck with publishing WindFlow! 🚀