# GitHub Workflows

This directory contains GitHub Actions workflows for automated CI/CD processes.

## Workflows

### 1. CI (`ci.yml`)

Runs on every push and pull request to main/develop branches.

**Features:**

- Tests on Node.js 20.15 and 21
- Runs linting and formatting checks
- Builds the package and verifies output
- Performs security audits
- Validates package.json structure

### 2. Publish (`publish.yml`)

Handles automatic publishing to NPM.

**Triggers:**

- Push to tags starting with `v*` (e.g., `v1.0.0`)
- Manual workflow dispatch with version selection

**Features:**

- Automatic version bumping (patch/minor/major)
- Creates and pushes Git tags
- Publishes to NPM
- Creates GitHub releases
- Runs all pre-publish checks

## Usage

### Automatic Publishing (Recommended)

1. **Create a new release:**

   ```bash
   # For patch version (0.1.0 -> 0.1.1)
   git tag v0.1.1
   git push origin v0.1.1
   
   # For minor version (0.1.0 -> 0.2.0)
   git tag v0.2.0
   git push origin v0.2.0
   
   # For major version (0.1.0 -> 1.0.0)
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **The workflow will automatically:**
   - Build the package
   - Run all checks
   - Publish to NPM
   - Create a GitHub release

### Manual Publishing

1. Go to the **Actions** tab in GitHub
2. Select **Publish to NPM** workflow
3. Click **Run workflow**
4. Choose version type (patch/minor/major)
5. Click **Run workflow**

### Local Development

```bash
# Run all tests locally
npm run test

# Build the package
npm run build

# Format code
npm run format

# Fix linting issues
npm run lintfix

# Clean build directory
npm run clean
```

## Required Secrets

Make sure to set up the following secrets in your GitHub repository:

1. **NPM_TOKEN**: Your NPM authentication token
   - Go to [NPM Account Settings](https://www.npmjs.com/settings/tokens)
   - Generate a new token with "Automation" type
   - Add it to GitHub repository secrets

2. **GITHUB_TOKEN**: Automatically provided by GitHub
   - Used for creating releases and pushing tags
   - No manual setup required

## Version Management

The package uses semantic versioning (SemVer):

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features (backward compatible)
- **Major** (0.1.0 → 1.0.0): Breaking changes

## Troubleshooting

### Build Failures

- Check that all TypeScript files compile without errors
- Ensure all dependencies are properly installed
- Verify that the build output structure matches package.json expectations

### Publishing Failures

- Verify NPM_TOKEN is correctly set
- Check that the package name is available on NPM
- Ensure version number is higher than the current published version

### Linting Failures

- Run `npm run lintfix` to automatically fix most issues
- Check ESLint configuration for custom rules
- Ensure all files follow the project's coding standards
