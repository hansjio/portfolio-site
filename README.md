# Hans Jio Arca — Portfolio Site
### Agent Briefing Document · Read this before touching anything.

This is a **single-page personal portfolio** for Hans Jio Arca — Software
Engineer, Data Scientist, and Hobby Photographer based in Quezon City,
Philippines. The site uses a deliberate **film photography aesthetic** (grain
overlay, amber palette, sprocket holes, viewfinder frame) that defines its
identity. Preserve it in all changes.

---

## 1. Stack & Architecture

| What | Answer |
|------|--------|
| Framework | None. Vanilla HTML, CSS, JavaScript only. |
| Build step | None. No npm, no bundler, no compilation. |
| Entry point | `index.html` — the entire site in one file (HTML + CSS + JS all inline) |
| Data layer | Three JS files in `data/` loaded via `<script>` tags |
| Hosting | Static file serving (Vercel / any static host) |
| Fonts | Google Fonts via `<link>` in `<head>` — IBM Plex Mono, DM Serif Display, DM Sans |

**The single most important rule:** Do not introduce any build tooling, npm
packages, or external JS libraries beyond what is already imported.

---

## 2. File Map

```
portfolio-site/
│
├── index.html                        ← entire site: all HTML, CSS (inline <style>), JS (inline <script>)
│
├── README.md                         ← this file (agent briefing)
├── DS-PROJECTS-GUIDE.md              ← step-by-step guide for adding data science projects
│
├── data/
│   ├── projects.js                   ← const PROJECTS = { ... }
│   ├── blog-posts.js                 ← const BLOG_POSTS = { ... }
│   └── gallery-data.js               ← const GALLERY = [ ... ]
│
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── hero-pfp.jpg          ← profile photo shown in hero viewfinder
    │   └── gallery/
    │       ├── neatly-organized.JPG
    │       ├── photo-04.jpg          ← Intramuros Wall
    │       ├── photo-05.jpg          ← EDSA Rush Hour
    │       ├── photo-06.jpg          ← Table Study
    │       ├── prettiest.png         ← My Kind of Woman
    │       ├── photo-07.jpg          ← QC Night Market
    │       ├── photo-08.jpg          ← Binondo Market
    │       ├── photo-09.jpg          ← Jeepney Driver
    │       └── artpiece.jpg          ← Poets of Physics
    │
    └── projects/
        ├── web-science/              ← all SE / full-stack projects live here
        │   ├── lupon/
        │   │   ├── dashboard.png
        │   │   ├── login.png
        │   │   ├── lupon-cases.png
        │   │   ├── lupon-reports.png
        │   │   ├── lupon-backups.png
        │   │   ├── lupon-logs.png
        │   │   ├── lupon-archive.png
        │   │   ├── USER-MANUAL-1.pdf
        │   │   └── academic_paper.pdf
        │   └── carinderia/
        │       ├── login.png
        │       ├── dashboard.png
        │       ├── pos.png
        │       ├── inventory.png
        │       ├── dish_management.png
        │       ├── transfers.png
        │       ├── reports.png
        │       └── user_management.png
        │
        └── data-science/             ← future DS / analytics projects live here
```

> **When adding a new project:**
> - SE / full-stack projects → create `assets/projects/web-science/{slug}/`
> - Data Science / analytics projects → create `assets/projects/data-science/{slug}/`
>
> Never put project assets anywhere else.

---

## 3. Page Sections (in order)

The site is a single scrolling page. Sections are identified by `id` and
connected to the fixed side navigation (`#frame-nav`).

| # | Section ID | Background | Purpose |
|---|-----------|-----------|---------| 
| 01 | `#hero` | `--bg2` (left) / `--bg` (right) | Name, bio, tags, CTA buttons, film viewfinder with profile photo |
| 02 | `#about` | `--bg2` | Quote block, bio paragraph, skillset chips, hobby chips, tech gear list, camera gear list |
| 03 | `#experience` | `--bg2` | Work timeline (left) + Education cards + Certifications (right) |
| 04 | `#projects` | `--bg` | Tabbed project grid: SE tab + DS tab (Data Analytics tab planned) |
| 05 | `#blog` | `--bg3` | Blog post list rows + "Browse All" button that opens the blog modal |
| 06 | `#gallery` | `--bg3` | Horizontal draggable film-strip photo gallery with lightbox |
| 07 | `#contact` | `--bg` | Contact cards (email, LinkedIn, GitHub) + message form via Formspree |

The `#frame-nav` (fixed right side) has `.frame-dot` elements with
`data-sec` attributes matching each section ID. The active dot updates via
`IntersectionObserver` at threshold 0.3. **Do not add new top-level sections
without updating frame-nav and the section numbering.**

---

## 4. Design System

### 4.1 Color Tokens

All colors are CSS custom properties. **Never hardcode hex values. Always use `var()`.**

```css
/* Amber — primary accent */
--amber:       #c8922a
--amber-light: #e0aa4a
--amber-pale:  #f0cb78
--amber-dim:   #7a5820
--amber-glow:  rgba(200,146,42,0.12)

/* Backgrounds (dark mode) */
--bg:       #111009   /* page background */
--bg2:      #181510   /* alternate section bg */
--bg3:      #201c14   /* deepest — film strip, gallery */
--surface:  #252118
--surface2: #2d2920

/* Borders */
--border:  #332e22
--border2: #443d2c

/* Text */
--cream:     #ede4d0   /* primary heading text */
--cream-dim: #a8997f
--text:      #e4dac8
--text-dim:  #c4aa88
--text-mute: #a89878
```

Light theme overrides live in `[data-theme="light"]`. The toggle button is
`#theme-toggle` and swaps `data-theme` on `<html>`. Both themes must work
after any CSS change.

### 4.2 Typography

```
--mono:  'IBM Plex Mono', monospace      → labels, tags, meta, code, nav
--serif: 'DM Serif Display', serif       → section titles, project titles, pull quotes
--sans:  'DM Sans', sans-serif           → body copy, descriptions
```

Usage patterns to follow when adding new elements:
- Section headings → `font-family:var(--serif); font-style:italic`
- Uppercase labels → `font-family:var(--mono); letter-spacing:.12em+; text-transform:uppercase`
- Body text → `font-family:var(--sans)` or `var(--serif)` italic for quotes
- Metadata / dates → `font-family:var(--mono); font-size:10-11px`

### 4.3 Easing

```css
--ease-expo: cubic-bezier(0.16,1,0.3,1)     /* entrances, reveals */
--ease-back: cubic-bezier(0.34,1.56,0.64,1) /* bouncy interactions */
```

### 4.4 Scroll Reveal System

Elements with `.reveal` class are animated in by `IntersectionObserver`
(threshold 0.08). Adding `.visible` triggers the transition.
Stagger delays via `.rv1` `.rv2` `.rv3` `.rv4`.
`.reveal-grid` staggers its direct children automatically.
**Use this system for any new animated elements. Do not add new keyframe
animations for entrance effects.**

### 4.5 Cursor System

Custom amber cursor: `#cursor-ring` (lagging ring) + `#cursor-dot` (precise dot).
- **All interactive elements must use `cursor:none`** — never `cursor:pointer`
- Body gets class `c-hover` on hover over interactive elements (enlarges ring)
- This is wired via a `querySelectorAll` chain at the bottom of the page script

**Any new interactive element must be added to that hover query string.**
Pattern:
```js
document.querySelectorAll('a,button,.new-element,...').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
});
```

---

## 5. Modal System

Four modals. Each follows the same lifecycle: add `.open` to the modal →
set `body.style.overflow = 'hidden'` → remove `.open` to close →
clear `body.style.overflow`. ESC key always closes.

### 5.1 Project Modal (`#proj-modal`)

**Trigger:** clicking any element with `[data-project="slug"]`
**Opens with:** `openModal(key)` → calls `buildModal(key)`
**Data source:** `PROJECTS` object from `data/projects.js`

`buildModal(key)` renders two panes:
- **Left** (`#modal-content-area`): badge, title, period, button row, metrics,
  stack tags, task tags, references, body HTML (Origin section)
- **Right** (`#modal-slides-stack`): stacked slide cards

**Slide rendering rule:**
```js
if (s.img) {
  // render: <div class="vis-slide-card"><img src="${s.img}" alt="${s.label}">...
} else {
  // render: <div class="vis-slide-card"><div class="vis-ph">... s.ph icon
}
// Both cases always include .vis-slide-label and .vis-slide-num
```

**Refs** in a project can be:
- `{ label, icon, file }` → opens in `#ref-modal` (local file preview)
- `{ label, icon, url }` → opens in new tab (external link)

### 5.2 Blog Modal (`#blog-modal`)

**Trigger:** clicking any `[data-post="key"]` row, or the `#open-blog-modal` button
**Opens with:** `openBlogModal(key)` (key is optional — null shows placeholder)
**Data source:** `BLOG_POSTS` object from `data/blog-posts.js`

Layout: two-column — sidebar list (left) + article reader (right).
`buildBlogSidebar(activeKey)` populates `#blog-sidebar-list`.
`loadBlogPost(key)` renders into `#blog-article-content`.

### 5.3 Gallery Lightbox (`#gal-lb`)

**Trigger:** clicking any `.gal-item` (only if `didDrag` is false)
**Opens with:** `openGlb(i)` where `i` is the index into `GALLERY`
**Data source:** `GALLERY` array from `data/gallery-data.js`

Supports keyboard navigation (← →) and ESC close.
`renderGlb()` renders `<img>` if `d.img` exists, otherwise placeholder.

### 5.4 Ref Viewer Modal (`#ref-modal`)

**Trigger:** clicking `.modal-ref[data-ref-file]` links inside proj-modal
**Opens with:** `openRefModal(label, file)`

Previews: `.png/.jpg/.jpeg/.gif/.webp/.svg` → `<img>`,
`.pdf` → `<iframe>`, anything else → placeholder message.

---

## 6. Data Files — Complete Reference

### 6.1 `data/projects.js` — PROJECTS

Full object shape:
```js
'slug-key': {
  label:      'Category · Context',          // string, shown above title in card
  title:      'Full Project Title',          // string
  period:     'Jan 2025 – May 2025',         // string
  badge:      'Featured',                    // optional string → amber badge
  thumb:      'assets/projects/web-science/slug/img.png', // optional → featured card bg image
  body:       `<p>...</p><h2>...</h2>...`,   // HTML string (template literal)
  stack:      ['Tech1', 'Tech2'],            // string array
  tasks:      ['Task1', 'Task2'],            // string array
  metrics: [                                 // optional array
    { val: '3', lbl: 'User Roles' }
  ],
  refs: [                                    // optional array
    { label: 'Label', icon: '◎', file: 'assets/projects/web-science/slug/file.pdf' }, // → ref-modal
    { label: 'Label', icon: '◎', url: 'https://...' }                                 // → new tab
  ],
  slides: [                                  // required array, min 1
    { ph: '▦', label: 'Slide Name', img: 'assets/projects/web-science/slug/file.png' }
  ],
  link:       'https://...',                 // optional → "Visit Project" btn
  githubLink: 'https://...',                 // optional → "GitHub Repo" btn
  linkText:   'Custom Button Label',         // optional, overrides link btn text
}
```

Body HTML rendering rules:
- `<p>` → body copy (font-size:13px, cream-dim)
- `<h2>` → serif italic heading with top amber border
- `<ul>` → list of bordered cards
- `<li>` → card with amber-dim left accent; `<strong>` inside renders as mono uppercase label
- Do not use `<h1>`, `<h3>`, `<div>`, `<span>`, `<table>` in body

**Current projects:**

| Key | Title | Category | Stack |
|-----|-------|----------|-------|
| `drift` | Temporal Drift Detector | `data-science` | Python, PyTorch, Kafka, MLflow, Redis |
| `sentiment` | Cartographic Sentiment Atlas | `data-science` | HuggingFace, BERT, UMAP, GeoPandas |
| `lupon` | Lupong Tagapamayapa CCRMS | `web-science` | PHP, MySQL, JavaScript, HTML/CSS, XAMPP |
| `carinderia` | Carinderia POS | `web-science` | React, Node.js, MySQL, JavaScript, Chart.js |

**Asset paths currently used in `projects.js`:**

All project asset paths in `projects.js` have been updated to the organized directory structure:
- Lupon project: `assets/projects/web-science/lupon/`
- Carinderia project: `assets/projects/web-science/carinderia/`

### 6.2 `data/blog-posts.js` — BLOG_POSTS

```js
'slug-key': {
  title:    'Post Title',
  date:     'Apr 18, 2025',          // format: Mon DD, YYYY
  readtime: '8 min read',
  category: 'Engineering',           // Engineering / Data Science / Film / Tools
  tags:     ['tag1', 'tag2'],        // lowercase, hyphenated
  body:     `<p>...</p>...`          // HTML string
}
```

Body HTML allowed: `<p>`, `<h2>`, `<h3>`, `<blockquote>`, `<code>`,
`<pre><code>`, `<ul>`, `<ol>`, `<li>`.

**Current posts (4 total):**

| Key | Title | Category | Date |
|-----|-------|----------|------|
| `cli-go` | Writing a CLI from scratch in Go | Engineering | Apr 18, 2025 |
| `feature-drift` | On feature drift and why your model rots faster than you think | Data Science | Mar 2, 2025 |
| `canonet` | The Canonet QL17 as a street camera: a year in | Film | Jan 14, 2025 |
| `neovim` | My Neovim setup for data engineering, annotated | Tools | Nov 28, 2024 |

The `#open-blog-modal` button text reads `Browse All Posts → N total` where N
is dynamically computed from `Object.keys(BLOG_POSTS).length`.

### 6.3 `data/gallery-data.js` — GALLERY

```js
{
  img:   'assets/images/gallery/filename.jpg', // required
  title: 'Photo Title',                        // required
  sub:   'Camera · ISO XXX · f/X · 1/XXX',    // required, film-style meta
  width: '310px'                               // required, controls flex width in track
}
```

Width range in use: 195px–380px. Vary for visual rhythm — don't make them all the same.

**Current gallery (9 photos):**

| File | Title | Camera / Film |
|------|-------|---------------|
| `artpiece.jpg` | Poets of Physics | Sony CyberShot DSC-W800 |
| `neatly-organized.JPG` | Neatly Organized | Sony CyberShot DSC-W800 |
| `photo-04.jpg` | Intramuros Wall | Delta 400 · f/11 · 1/125 |
| `photo-05.jpg` | EDSA Rush Hour | Tri-X 3200 · f/2.8 · 1/60 |
| `photo-06.jpg` | Table Study | FP4+ · f/4 · 1/60 |
| `prettiest.png` | My Kind of Woman | Canon EOS 550d · f/8 · 1/40 |
| `photo-07.jpg` | QC Night Market | Delta 3200 · f/1.4 · 1/60 |
| `photo-08.jpg` | Binondo Market | HP5 · f/8 · 1/250 |
| `photo-09.jpg` | Jeepney Driver | Tri-X 400 · f/5.6 · 1/250 |

> ℹ️ **Gallery images:** Only `neatly-organized.JPG` is currently present on disk in
> `assets/images/gallery/`. The remaining 8 photo files listed in `gallery-data.js`
> are placeholder entries that the user will upload in the future.

---

## 7. Key JavaScript Functions

All JS lives at the bottom of `index.html` in a single `<script>` block.

| Function | Purpose |
|----------|---------|
| `buildBlogSidebar(activeKey)` | Populates blog modal sidebar from BLOG_POSTS |
| `loadBlogPost(key)` | Renders a post into the article pane |
| `openBlogModal(postKey)` | Opens blog modal, optionally to a specific post |
| `closeBlogModal()` | Closes blog modal |
| `buildModal(key)` | Builds project modal content from PROJECTS[key] |
| `openModal(key)` | Calls buildModal, opens proj-modal |
| `closeModal()` | Closes proj-modal |
| `buildGallery()` | Renders GALLERY array into #gallery-track |
| `openGlb(i)` | Opens gallery lightbox at index i |
| `closeGlb()` | Closes lightbox |
| `renderGlb()` | Renders current glbCur item in lightbox |
| `openRefModal(label, file)` | Opens ref viewer modal |
| `closeRefModal()` | Closes ref viewer modal |

**State variables:**
- `glbCur` — current gallery lightbox index
- `isDrag`, `didDrag`, `dStartX`, `dScrollL` — drag-to-scroll state for gallery
- `dark` — current theme state (boolean)

---

## 8. Known Issues / Planned Work

| Issue | Location | Fix |
|-------|----------|-----|
| Missing gallery images | `assets/images/gallery/` | Add the 8 missing photo files so all gallery items display correctly |
| No OG/Twitter meta tags | `<head>` in index.html | Add `<meta property="og:...">` block for link preview cards |
| Blog search missing | Blog modal sidebar | Add text input filtering BLOG_POSTS by title + tags |
| Reading progress bar | Blog modal article pane | Thin amber bar that fills as article scrolls |

---

## 9. Adding Content — Step by Step

### Add a new Software Engineering project

1. Create `assets/projects/web-science/{slug}/` and add screenshot PNGs
2. Add entry to `data/projects.js` — follow the PROJECTS schema exactly; use paths like `assets/projects/web-science/{slug}/file.png`
3. Add a `<div class="proj-card" data-project="{slug}">` card to `#tab-se`
   inside the `.proj-grid` in index.html
4. If it should be featured (full width), add class `featured-card` and
   set `grid-column: span 2`

### Add a new Data Science project

> **See [`DS-PROJECTS-GUIDE.md`](DS-PROJECTS-GUIDE.md) for the full step-by-step process,**
> **asset guidelines, copy-ready templates, and a publishing checklist.**

1. Create `assets/projects/data-science/{slug}/` and add charts/cover image
2. Add entry to `data/projects.js` — use `assets/projects/data-science/{slug}/` paths
3. Add a `<div class="lab-card" data-project="{slug}">` to `#tab-ds > .lab-grid` in index.html
4. Remove (or replace) the "In the Lab" placeholder card once you have a real project

### Add a new blog post

1. Add entry to `data/blog-posts.js` — newest post goes at the top of the object
2. Add a `.blog-row[data-post="{key}"]` row to the blog list in `#blog` section
3. The `#open-blog-modal` button count updates automatically from JS

### Add a gallery photo

1. Drop the image into `assets/images/gallery/`
2. Add an entry to `data/gallery-data.js` — append to the GALLERY array
3. Choose a `width` between 195px and 380px for visual variety

---

## 10. Hard Rules

1. **No build step, no npm, no bundler.** The site must open by double-clicking index.html.
2. **No box-shadow anywhere.** It breaks the flat film aesthetic.
3. **No `cursor:pointer` or `cursor:auto`** on interactive elements. Always `cursor:none`.
4. **No new Google Fonts** without explicit instruction.
5. **Never rename CSS custom properties** without updating every usage in the file.
6. **Never rewrite a whole function** to fix a small bug — targeted edits only.
7. **Never break the four modals.** When in doubt, change nothing and ask.
8. **Both dark and light themes** must be tested after any CSS change.
9. **The film aesthetic is intentional.** Grain, amber, sprockets, viewfinder — preserve all of it.
10. **Check for existing references** before renaming any JS function or variable.
11. **All project asset paths must use the new structure.** SE projects under `web-science/`, DS projects under `data-science/`.

---

## 11. Owner Context

- **Name:** Hans Jio Arca
- **Location:** Quezon City / Manila, Philippines (UTC+8)
- **Education:** BS Computer Science, Major in Data Science — Adamson University (2023–2027), 1.07 GWA, Dean's Lister
- **Available for:** Freelance, contract, full-time remote. Open to relocation.
- **Contact:** hansj.arca@gmail.com · linkedin.com/in/hansjioarca · github.com/hansjio
- **Contact form:** Formspree endpoint `https://formspree.io/f/mpqbqaap`
- **Future DS projects** (planned for `data-science/` folder + `[data-tab="da"]` tab): PSE Stock EDA, OFW Remittance Analysis, PH Inflation Forecasting, Credit Risk Scoring, GCash Adoption Analysis