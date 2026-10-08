# Abbytes — abbytes.in

Professional cybersecurity freelance portfolio site (static HTML, hosted on GitHub Pages).

## Structure
- `index.html` — homepage
- `services/` — service landing pages (web, mobile, API, Delhi NCR) + hub
- `blog/` — blog index and posts
- `og/` — one 1200x630 social preview image per page (`og/<slug>.png`)
- `sitemap.xml`, `robots.txt` — update the sitemap whenever a page is added

## Adding a blog post
Keep the post template **outside** this repository (it would otherwise be publicly reachable). For each new post:
1. Create `blog/<slug>.html` with a unique title, description, canonical, Open Graph/Twitter tags, and TechArticle + BreadcrumbList schema.
2. Add `og/<slug>.png` (1200x630).
3. Add a card to `blog/index.html` and the homepage, and a `<url>` with `<lastmod>` to `sitemap.xml`.
4. Link to it from at least two related pages.
