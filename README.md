# Paws & Hearts

A simple static pet adoption website for showcasing pets, adoption information, and contact details.

## Run locally

Open the project folder in a browser, or run a local server from the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Publish online

This site is configured for GitHub Pages deployment using a workflow.

### GitHub Pages
1. Push the project to a GitHub repository.
2. In repository settings, enable GitHub Pages.
3. Choose the `GitHub Actions` source.
4. The workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) will publish the site automatically on every push to `main`.

### Netlify
1. Drag and drop the project folder into Netlify.
2. Or connect the GitHub repository and deploy automatically.
