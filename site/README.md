# Site

This folder contains the website for OpenClaw KnowHowHub.

## Local development

```bash
cd site
npm install
npm run docs:dev
```

## Build

```bash
cd site
npm run docs:build
```

## Deploy

Deployment is handled by GitHub Actions via:

- `.github/workflows/deploy-site.yml`

The workflow publishes `site/docs/.vitepress/dist` to GitHub Pages.
