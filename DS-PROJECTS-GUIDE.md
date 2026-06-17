# Data Science Projects — Portfolio Guide
### How to add, structure, and present DS work on the site.

This file is your reference when you're ready to publish a data science project.
Keep it updated as your process evolves.

---

## The Philosophy

The DS tab on this site is meant to function like a **research lab notebook** —
not a gallery of polished deliverables, but a collection of serious analytical
work with clear hypotheses, honest findings, and rigorous methods.

The card style already reinforces this: `lab-card` components have a
**Hypothesis** field (`lab-card-hyp`) built into the design. Use it. State
what you were trying to find out. The findings — positive or null — belong in
the modal body.

**Show the work, not just the result.**

---

## 1. Before You Add Anything to the Site

A project is ready to publish when it has:

- [ ] A notebook or script that runs cleanly from top to bottom
- [ ] A clear problem statement and hypothesis
- [ ] At least one meaningful visualization (chart, table, or map)
- [ ] An honest conclusions section — including what didn't work
- [ ] At minimum one shareable artifact (PDF export, GitHub link, or nbviewer link)

It does **not** need to be a full academic paper. A well-documented notebook
with a good writeup is enough.

---

## 2. Asset Preparation

### Folder structure

```
assets/projects/data-science/{slug}/
    cover.png            ← used as card background thumbnail (optional but recommended)
    chart-01.png         ← key visualization (slides panel)
    chart-02.png
    chart-03.png
    notebook.pdf         ← exported notebook PDF (optional, opens in ref-modal)
```

### Screenshot / export guidelines

| Asset | Ideal size | Notes |
|-------|-----------|-------|
| `cover.png` | ~1200×800px | The darkest / most dramatic chart looks best here |
| Slide charts | ~1200×900px | Screenshot at 125% browser zoom for retina sharpness |
| `notebook.pdf` | Any | Export from Jupyter: File → Download as → PDF |

> Screenshots taken in **dark mode** blend better with the site's amber-on-dark aesthetic.
> If your Jupyter theme is light, that's fine — the modal renders them correctly either way.

---

## 3. The `data/projects.js` Entry

Copy this template and fill it in. **All paths must start with `assets/projects/data-science/{slug}/`.**

```js
'your-slug': {
  label: 'Data Science · Exploratory Analysis',  // or: 'Data Science · Machine Learning'
                                                  //     'Data Science · NLP'
                                                  //     'Data Science · Forecasting'
                                                  //     'Data Science · Classification'
  title: 'Full Descriptive Title of Your Project',
  period: 'Jun 2026',                             // month + year is enough
  thumb: 'assets/projects/data-science/your-slug/cover.png',  // optional but recommended

  body: `
    <p>One clear paragraph: what is this, what data did you use, and why did it matter to you?</p>

    <h2>Hypothesis</h2>
    <ul>
      <li><strong>Question:</strong> What were you trying to find out?</li>
      <li><strong>Data Source:</strong> Where did the data come from? PSE, World Bank, BSP, Kaggle, etc.</li>
      <li><strong>Scope:</strong> Time range, geographic scope, sample size.</li>
    </ul>

    <h2>Method</h2>
    <ul>
      <li><strong>Step 1:</strong> How you collected / cleaned / sampled the data.</li>
      <li><strong>Step 2:</strong> What algorithms or statistical methods you applied.</li>
      <li><strong>Step 3:</strong> How you validated or tested results.</li>
    </ul>

    <h2>Findings</h2>
    <ul>
      <li><strong>Key Result:</strong> What was the headline finding?</li>
      <li><strong>Surprising Finding:</strong> What didn't go as expected?</li>
      <li><strong>Limitations:</strong> What would you do differently with more time / data?</li>
    </ul>
  `,

  stack: ['Python', 'Pandas', 'Matplotlib'],  // tools actually used
  tasks: ['EDA', 'Data Cleaning', 'Visualization', 'Statistical Analysis'],
                                               // pick from the list below

  metrics: [                                   // 2–4 punchy numbers from your findings
    { val: '5yr',  lbl: 'Data Range' },
    { val: '30+',  lbl: 'Securities Analyzed' },
    { val: '12',   lbl: 'Visualizations' }
  ],

  refs: [                                      // at least one ref is strongly recommended
    { label: 'Notebook (PDF)',   icon: '◈', file: 'assets/projects/data-science/your-slug/notebook.pdf' },
    { label: 'GitHub Repo',      icon: '◎', url: 'https://github.com/hansjio/...' },
    { label: 'Interactive View', icon: '◉', url: 'https://nbviewer.org/...' }  // optional
  ],

  slides: [                                    // 2–5 slides; use your best charts
    { ph: '▦', label: 'Key Visualization',    img: 'assets/projects/data-science/your-slug/chart-01.png' },
    { ph: '◉', label: 'Secondary Finding',    img: 'assets/projects/data-science/your-slug/chart-02.png' },
    { ph: '〜', label: 'Distribution / Model', img: 'assets/projects/data-science/your-slug/chart-03.png' }
  ],

  githubLink: 'https://github.com/hansjio/...',  // optional
  link: 'https://...',                            // optional: nbviewer, Streamlit app, Kaggle
  linkText: 'View Notebook',                      // optional: overrides "Visit Project" btn text
}
```

### Common `label` values for DS projects

```
'Data Science · Exploratory Analysis'
'Data Science · Machine Learning'
'Data Science · Deep Learning'
'Data Science · NLP'
'Data Science · Time Series'
'Data Science · Forecasting'
'Data Science · Classification'
'Data Science · Clustering'
'Data Science · Computer Vision'
'Data Science · Financial Analysis'
'Data Science · Geospatial Analysis'
```

### Common `tasks` values for DS projects

```
'EDA'                     'Data Cleaning'           'Feature Engineering'
'Statistical Analysis'    'Visualization'           'Model Training'
'Model Evaluation'        'Hyperparameter Tuning'   'Cross-Validation'
'Time Series Analysis'    'Forecasting'             'NLP / Text Analysis'
'Sentiment Analysis'      'Clustering'              'Classification'
'Regression'              'Dimensionality Reduction' 'Pipeline Engineering'
'Report Writing'          'Data Collection'         'Web Scraping'
```

---

## 4. The `index.html` Lab Card

After adding to `projects.js`, add a card to `#tab-ds > .lab-grid` in `index.html`.
Find the `<!-- ════════ PROJECTS ════════ -->` comment.

**Replace or add alongside the "In the Lab" placeholder:**

```html
<!-- inside #tab-ds .lab-grid — remove the placeholder when you have real cards -->
<div class="lab-card" data-project="your-slug">
  <div class="lab-num-badge">DS-001 · Jun 2026</div>
  <div class="lab-card-title">Full Title of Your Project</div>
  <div class="lab-card-hyp">Hypothesis: One sentence stating what you set out to find.</div>
  <p class="lab-card-desc">Two sentences max. What is this project? What does it show?</p>
  <div class="lab-card-stack">
    <span class="lab-card-tag">Python</span>
    <span class="lab-card-tag">Pandas</span>
    <span class="lab-card-tag">Seaborn</span>
  </div>
  <div class="lab-metrics">
    <div class="metric"><div class="m-val">5yr</div><div class="m-lbl">Data Range</div></div>
    <div class="metric"><div class="m-val">30+</div><div class="m-lbl">Securities</div></div>
    <div class="metric"><div class="m-val">12</div><div class="m-lbl">Charts</div></div>
  </div>
</div>
```

### Numbering convention

Use `DS-001`, `DS-002`, etc. in `lab-num-badge`. Keep them sequential.
The year after the dot is the year completed, not started.

### Grid layout rules

- The `lab-grid` and `proj-grid` use `grid-template-columns: 1fr 1fr` — cards pair up automatically.
- If you have an **odd number** of cards (or a featured card that throws off the row parity), the page automatically detects this via `adjustGridSpans()` in JavaScript, dynamically applying the `.lone-card` class to scale the lone card to full width (`grid-column: span 2`). You do not need to apply this manually!
- **Featured project** (your best work): add `class="featured-card"` or `style="grid-column:span 2"` to make it full-width.

---

## 5. Planned Projects Pipeline

Work through these roughly in this order — earlier ones are simpler to execute
and will teach you the tooling before you tackle the harder ones.

| Priority | Slug | Title | Main Skill | Difficulty |
|----------|------|-------|-----------|-----------|
| 1 | `pse-eda` | PSE Stock Market EDA | EDA · Visualization | ⭑⭑ |
| 2 | `ph-inflation` | PH Inflation Forecasting | Time Series · ARIMA | ⭑⭑⭑ |
| 3 | `ofw-remittance` | OFW Remittance Analysis | EDA · Geospatial | ⭑⭑ |
| 4 | `credit-risk` | Credit Risk Scoring | Classification · ML | ⭑⭑⭑⭑ |
| 5 | `gcash-adoption` | GCash / Digital Finance Adoption | EDA · Regression | ⭑⭑⭑ |

### Quick-start notes per project

**`pse-eda` — PSE Stock Market EDA**
- Data: PSE Edge (pse.com.ph), or Yahoo Finance via `yfinance` for historical prices
- Focus: sector performance comparison, price trend visualization, correlation heatmap
- Good first project — pure EDA, no model to tune, results are inherently visual

**`ph-inflation` — PH Inflation Forecasting**
- Data: Philippine Statistics Authority (psa.gov.ph) — CPI monthly reports (CSV)
- Baseline: ARIMA or Holt-Winters; stretch: Prophet or LSTM
- Key chart: actual vs. forecast line plot with confidence bands

**`ofw-remittance` — OFW Remittance Analysis**
- Data: Bangko Sentral ng Pilipinas (bsp.gov.ph) — OFW Remittances statistics
- Add: World Bank migration data for sending countries
- Good geospatial angle: choropleth of remittance source countries

**`credit-risk` — Credit Risk Scoring**
- Data: Kaggle "Give Me Some Credit" or Home Credit dataset (public, labeled)
- Models: Logistic Regression baseline → XGBoost → LightGBM
- Key metric: ROC-AUC, Gini coefficient, feature importance plot

**`gcash-adoption` — GCash / Digital Finance Adoption**
- Data: BSP Financial Inclusion Survey, World Bank Findex database
- Angle: adoption rate by income class, region, and gender — regression analysis
- Pair with: fintech growth narrative, interesting for narrative-driven EDA

---

## 6. Tooling Stack Recommendation

Start with this stack. Don't add more until you need it.

```
Notebooks:   Jupyter Lab
Core:        Python 3.11+, Pandas, NumPy
Viz:         Matplotlib + Seaborn (for static charts in slides)
             Plotly (for interactive charts in nbviewer / Streamlit)
ML:          scikit-learn (baseline), XGBoost / LightGBM (boosting)
Time series: statsmodels (ARIMA), Prophet (Facebook)
Geospatial:  GeoPandas, Folium (choropleth maps)
Export:      nbconvert → PDF for refs, or nbviewer link
Version:     Git — one repo per project or monorepo with /notebooks/{slug}/
```

---

## 7. The Full Publishing Checklist

Use this when you're ready to ship a project to the site.

### Assets
- [ ] `cover.png` — best chart, dark-background preferred, ~1200×800px
- [ ] `chart-01.png`, `chart-02.png`, etc. — your key slides
- [ ] `notebook.pdf` — optional but strongly recommended
- [ ] All files placed in `assets/projects/data-science/{slug}/`

### Data file (`data/projects.js`)
- [ ] Entry added with correct slug key
- [ ] `label` matches the project type
- [ ] `thumb` path correct
- [ ] `body` has: intro paragraph, Hypothesis h2, Method h2, Findings h2
- [ ] `stack` lists only tools actually used
- [ ] `metrics` has 2–4 real numbers from the project
- [ ] `refs` has at least one working link (GitHub or PDF)
- [ ] `slides` paths all correct and files exist on disk
- [ ] All asset paths start with `assets/projects/data-science/{slug}/`

### HTML (`index.html`)
- [ ] `lab-card` added to `#tab-ds .lab-grid`
- [ ] `data-project="{slug}"` matches the key in `projects.js`
- [ ] `lab-num-badge` is sequential (DS-001, DS-002…)
- [ ] Placeholder card removed (or kept if you still have no real cards)
- [ ] `lab-card-hyp` text is a single, clear hypothesis sentence

### Sanity check
- [ ] Open `index.html` in browser → click Data Science tab → card appears
- [ ] Click card → modal opens with correct title, metrics, and slides
- [ ] All slide images load (no broken image icons)
- [ ] All ref links work (PDFs open in ref-modal, URLs open in new tab)
- [ ] Both dark and light themes look correct

---

## 8. Writing Good Lab Card Copy

The `lab-card-desc` is your elevator pitch — two sentences max.

**Bad:** "This project analyzes the Philippine Stock Exchange."
**Good:** "Five years of PSE data across 30+ securities, analyzed for sector correlation patterns and seasonal volume anomalies."

The `lab-card-hyp` should be a falsifiable statement.

**Bad:** "I looked at inflation data."
**Good:** "Hypothesis: Philippine CPI shows a predictable 6-month lag behind global oil price movements."

The `metrics` should be numbers that make someone stop scrolling.

**Weak metrics:** `{ val: '1', lbl: 'Dataset' }`, `{ val: 'EDA', lbl: 'Type' }`
**Strong metrics:** `{ val: '2.4M', lbl: 'Records' }`, `{ val: '89%', lbl: 'Model Accuracy' }`, `{ val: '10yr', lbl: 'Historical Data' }`

---

*Last updated: June 2026 · By: Hans Jio Arca*
