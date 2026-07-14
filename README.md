# Vote4Democracy — Project OMega

**Civic Intelligence Platform · 2026 Midterms**
Act. Grade. Follow the Money.

---

## 📁 Repo Structure

```
vote4democracy/
├── index.html          ← Main site (v19 — rename from vote4democracy_v19.html)
├── manifest.json       ← PWA manifest (app install config)
├── sw.js               ← Service worker (offline + caching)
├── htaccess.txt        ← Rename to .htaccess before uploading
├── README.md           ← This file
└── assets/
    ├── icon-192.png    ← PWA icon 192×192px (YOU MUST CREATE)
    └── icon-512.png    ← PWA icon 512×512px (YOU MUST CREATE)
```

---

## 🚀 Deploy Checklist

- [ ] Rename `vote4democracy_v19.html` → `index.html`
- [ ] Rename `htaccess.txt` → `.htaccess`
- [ ] Add icon-192.png and icon-512.png to /assets/
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Add custom domain: vote4democracy.com
- [ ] Add Supabase env vars in Vercel dashboard

---

## 🔑 Environment Variables (Vercel Dashboard)

```
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🌐 Domains

- **Parent:** vote4democracy.com
- **Youth:** youngvotesmatter.com  
- **Advocacy:** fight4thevote.com

---

## 📱 PWA Icons

Generate free at: https://favicon.io or https://www.pwabuilder.com
Required sizes: 192×192px and 512×512px PNG

---

*© 2026 Vote4Democracy / Project OMega*
