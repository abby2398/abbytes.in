# Abbytes — abbytes.in

Professional cybersecurity freelance portfolio site.

## Stack
- Plain HTML / CSS / JS — no build step needed
- Hosted on GitHub Pages with custom domain

---

## 🚀 Deployment (GitHub Pages + Custom Domain)

### Step 1 — Create GitHub Repo
1. Go to https://github.com/new
2. Name it exactly: `abbytes.in` (or your GitHub username repo: `YOUR_USERNAME.github.io`)
3. Set it to **Public**
4. Don't initialize with README (you already have files)

### Step 2 — Push Files
```bash
cd abbytes
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abbytes.in.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `root`
4. Save

### Step 4 — Add Custom Domain in GitHub
1. In Settings → Pages, under "Custom domain" enter: `abbytes.in`
2. Click Save — this auto-creates/updates the CNAME file

### Step 5 — DNS Configuration (at your domain registrar)
Add these records with your registrar (GoDaddy / Namecheap / Hostinger / etc):

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | YOUR_USERNAME.github.io |

DNS propagation takes 5–30 minutes (up to 24h in rare cases).

### Step 6 — Enable HTTPS
Back in GitHub Settings → Pages → tick **Enforce HTTPS** (available after DNS propagates).

---

## 📝 Personalisation Checklist
- [ ] Replace `YOUR_GITHUB_URL` with your actual GitHub profile URL
- [ ] Replace `YOUR_LINKEDIN_URL` with your LinkedIn URL
- [ ] Replace `hello@abbytes.in` with your actual email
- [ ] Upload `resume.pdf` to the repo root
- [ ] Set up Formspree (https://formspree.io) — free plan works — and replace `YOUR_FORM_ID`
- [ ] Add a real `og-image.png` (1200×630px) for social sharing
- [ ] Write actual blog posts in `/blog/` folder

## 📁 File Structure
```
abbytes/
├── index.html        ← Main site
├── style.css         ← Styles
├── script.js         ← Interactions
├── CNAME             ← Custom domain (do not delete)
├── robots.txt        ← SEO
├── sitemap.xml       ← SEO
├── resume.pdf        ← Add yours here
└── blog/
    ├── ssl-pinning-flutter.html
    ├── android-phishing-forensics.html
    └── ai-in-security-audits.html
```
