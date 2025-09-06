# Deployment Guide

This guide explains how to set up and use the automated deployment system for the n8n-nodes-fineract package.

## 🚀 Quick Start

### 1. Set up NPM Token

1. Go to [NPM Account Settings](https://www.npmjs.com/settings/tokens)
2. Generate a new token with "Automation" type
3. Copy the token
4. Go to your GitHub repository → Settings → Secrets and variables → Actions
5. Add a new repository secret:
   - Name: `NPM_TOKEN`
   - Value: [your npm token]

### 2. Publish Your First Release

#### Option A: Automatic (Recommended)

```bash
# Create and push a tag
git tag v0.1.0
git push origin v0.1.0
```

#### Option B: Manual

1. Go to GitHub Actions tab
2. Select "Publish to NPM" workflow
3. Click "Run workflow"
4. Choose version type and run

## 📋 Workflow Details

### CI Workflow (`ci.yml`)

- **Triggers**: Push to main/develop, Pull requests
- **Tests**: Node.js 20.15 & 21
- **Checks**: Linting, formatting, building, security audit
- **Duration**: ~2-3 minutes

### Publish Workflow (`publish.yml`)

- **Triggers**: Git tags (v*), Manual dispatch
- **Actions**: Build, test, version bump, publish to NPM, create GitHub release
- **Duration**: ~3-5 minutes

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Watch mode for development
npm run build        # Build the package
npm run test         # Run all tests
npm run clean        # Clean build directory

# Code Quality
npm run lint         # Run ESLint
npm run lintfix      # Fix linting issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting

# Version Management
npm run version:patch  # Bump patch version (0.1.0 → 0.1.1)
npm run version:minor  # Bump minor version (0.1.0 → 0.2.0)
npm run version:major  # Bump major version (0.1.0 → 1.0.0)

# Release (creates tag and pushes)
npm run release:patch  # Patch release
npm run release:minor  # Minor release
npm run release:major  # Major release
```

## 🏷️ Version Management

### Semantic Versioning (SemVer)

- **Patch** (0.1.0 → 0.1.1): Bug fixes, small improvements
- **Minor** (0.1.0 → 0.2.0): New features, backward compatible
- **Major** (0.1.0 → 1.0.0): Breaking changes

### Release Process

1. **Development**: Work on feature branch
2. **Testing**: Create pull request (triggers CI)
3. **Review**: Code review and approval
4. **Merge**: Merge to main branch
5. **Release**: Create tag or use manual workflow
6. **Publish**: Automatic NPM publishing and GitHub release

## 🔍 Troubleshooting

### Common Issues

#### Permission Denied Errors

If you get "Permission to Yann-J/n8n-nodes-fineract.git denied to github-actions[bot]":

**Quick Fix (Recommended):**

1. Use the `publish-simple.yml` workflow instead
2. Create tags manually: `git tag v1.0.0 && git push origin v1.0.0`

**Alternative Fix:**

1. Go to Repository Settings → Actions → General
2. Under "Workflow permissions" select "Read and write permissions"
3. Save the changes

#### Build Failures

```bash
# Check TypeScript compilation
npm run build

# Check for linting errors
npm run lint

# Fix formatting issues
npm run format
```

#### Publishing Failures

- **NPM Token**: Ensure `NPM_TOKEN` secret is set correctly
- **Version Conflict**: Check if version already exists on NPM
- **Permissions**: Verify NPM package ownership

#### Workflow Failures

- **Node Version**: Ensure using supported Node.js version (≥20.15)
- **Dependencies**: Run `npm ci` to install exact versions
- **Secrets**: Verify all required secrets are configured

### Debug Commands

```bash
# Test build locally
npm run build

# Test prepublish checks
npm run prepublishOnly

# Check package structure
npm pack --dry-run

# Verify NPM token
npm whoami
```

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test`
5. Create a pull request
6. Wait for CI checks to pass
7. Get code review approval
8. Merge to main

## 📞 Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/Yann-J/n8n-nodes-fineract/issues)
2. Review the [CI logs](https://github.com/Yann-J/n8n-nodes-fineract/actions)
3. Create a new issue with detailed information
