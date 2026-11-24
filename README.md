# Jakub Olszewski's portfolio

Personal developer portfolio: https://jakubo.dev

Built with Astro, Tailwind CSS and JavaScript. The site presents selected university and personal projects, my development background and contact details.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Project content

Project details are maintained in `src/data/projects.js`. The project list and individual project pages use the same data, so descriptions, technologies and links can be updated in one place.

## Deployment

The site is configured for `https://jakubo.dev` and Cloudflare static asset deployment. The production build is generated in `dist/`.
