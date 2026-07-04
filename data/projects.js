const PROJECTS = {
  lupon: {
    thumb: 'assets/projects/web-science/lupon/dashboard.png',
    label: 'Full-Stack Web Development · Academic Service Learning',
    title: 'Lupong Tagapamayapa: Criminal & Civil Cases Records Management System',
    period: 'Jan 2025 – May 2025',
    body: `
      <p>A full-stack records management system developed for Barangay Molino III in Bacoor, Cavite, as part of Adamson University's Academic Service Learning program. The barangay previously relied on handwritten logbooks and basic spreadsheets to manage criminal and civil case records filed under the Katarungang Pambarangay — the Philippines' barangay-level justice system. Our team of six computer science students designed, built, and deployed a complete digital replacement in direct collaboration with barangay officials and Lupon members.</p>

      <h2>Problem</h2>
      <ul>
        <li><strong>Slow Record Retrieval:</strong> Barangay staff had to manually search through physical logbooks to locate case records, causing significant delays when verifying case status or locating involved parties.</li>
        <li><strong>Disorganized Data:</strong> Case details were scattered across paper forms and a basic spreadsheet with no structured format, making it prone to errors, inconsistencies, and data loss.</li>
        <li><strong>No Access Control:</strong> Sensitive criminal and civil records had no authentication layer — anyone with access to the filing cabinet or the computer could view or modify records.</li>
        <li><strong>No Audit Trail:</strong> There was no way to track who accessed or modified a record, creating accountability gaps in a legal record-keeping context.</li>
        <li><strong>Manual Reporting:</strong> Generating monthly or annual case reports required manually counting and tallying records by hand, a time-consuming and error-prone process.</li>
      </ul>

      <h2>Solution</h2>
      <ul>
        <li><strong>Role-Based Access Control:</strong> Implemented three distinct user roles — Super Admin (full control), Lupon (view and edit), and Official (view only) — ensuring sensitive records are only accessible to authorized personnel.</li>
        <li><strong>Case Management Module:</strong> Built a structured case entry system supporting criminal and civil cases with fields for complainants, respondents, hearing dates, action taken, settlement status, compliance tracking, and file attachments.</li>
        <li><strong>Advanced Search & Filtering:</strong> Enabled staff to locate any case record in seconds by searching across case ID, names, status, nature, date filed, and column values — replacing the manual logbook entirely.</li>
        <li><strong>Dashboard with Analytics:</strong> Designed a KPI dashboard displaying total, criminal, and civil case counts with dynamic line and pie charts filterable by date range, giving officials an at-a-glance view of case activity.</li>
        <li><strong>Reports & Excel Export:</strong> Built a reports module that filters case data by date and type and exports to Excel after password verification, enabling official record submissions to government agencies.</li>
        <li><strong>Archive System:</strong> Added a case archiving flow for closed or inactive cases, with the ability to restore archived records to the active list when needed.</li>
        <li><strong>Encrypted Data Backup & Restore:</strong> Implemented backup to local PC or external USB drive (encrypted automatically) and a restore flow requiring Lupon or Super Admin password verification — protecting data against loss or corruption.</li>
        <li><strong>System Activity Logs:</strong> Logged all user actions (auth, case changes, data operations, errors) with timestamp, IP address, and action type — stored in database, file, or both — providing a full audit trail.</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li><strong>Modernized Justice Operations:</strong> Barangay Molino III transitioned from paper-based record keeping to a fully digital case management system, deployed and operational at their Hall of Justice.</li>
        <li><strong>Faster Case Processing:</strong> Staff can now locate any case record instantly via search and filter, eliminating the time previously spent manually browsing through logbooks.</li>
        <li><strong>Improved Data Security:</strong> Role-based access and encrypted backups ensure that sensitive criminal and civil records are protected from unauthorized access and data loss.</li>
        <li><strong>Data-Driven Governance:</strong> The dashboard provides barangay officials with live case statistics, enabling more informed decisions about community peace and order.</li>
        <li><strong>Recognized by Faculty:</strong> The project received an overall Outstanding rating (5/5) from both the faculty evaluator and the community partner, the Barangay Secretary.</li>
      </ul>
    `,
    stack: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    tasks: ['Full-Stack Development', 'Database Design', 'Client Liaison', 'UI/UX', 'Deployment', 'Training'],
    metrics: [
      { val: '3', lbl: 'User Roles' },
      { val: '7+', lbl: 'Core Modules' },
      { val: '280hrs', lbl: 'Service Hours' }
    ],
    refs: [
      { label: 'System User Manual', icon: '◎', file: 'assets/projects/web-science/lupon/USER-MANUAL-1.pdf' },
      { label: 'Academic Paper',     icon: '◈', file: 'assets/projects/web-science/lupon/academic_paper.pdf' }
    ],
    slides: [
      { ph: '▦', label: 'Dashboard — KPI & Case Charts', img: 'assets/projects/web-science/lupon/dashboard.png'  },
      { ph: '◉', label: 'Cases Module',                  img: 'assets/projects/web-science/lupon/lupon-cases.png' },
      { ph: '〜', label: 'Reports — Export to Excel',     img: 'assets/projects/web-science/lupon/lupon-reports.png' },
      { ph: '⊙', label: 'Backups & Restore',             img: 'assets/projects/web-science/lupon/lupon-backups.png' },
      { ph: '◎', label: 'System Logs',                   img: 'assets/projects/web-science/lupon/lupon-logs.png'   },
      { ph: '⊡', label: 'Archive Module',                img: 'assets/projects/web-science/lupon/lupon-archive.png' }
    ]
  },
  carinderia: {
    label: 'Full-Stack Web Development · Freelance',
    title: 'Carinderia POS: Multi-Branch Point of Sale System',
    period: '2025',
    githubLink: 'https://github.com/hansjio/carinderia-pos-demo',
    body: `
      <p>A comprehensive web-based platform designed for a food business operating a central production kitchen and three retail branches. The system integrates a Point of Sale, automated recipe costing, real-time inventory tracking, and multi-branch analytics — streamlining operations from the kitchen all the way to the final sale.</p>

      <h2>Problem</h2>
      <ul>
        <li><strong>No Centralized Visibility:</strong> The owner had no unified way to track how food prepared in the main kitchen was distributed and sold across three separate branch locations.</li>
        <li><strong>Hidden Costs & Unclear Margins:</strong> Calculating exact profit per dish was unreliable because ingredient prices and portion sizes were never directly linked to sales data, making true profitability invisible.</li>
        <li><strong>Inventory Inaccuracy:</strong> Stock levels frequently diverged from reality — there was no automated mechanism to deduct raw ingredients from the pantry as meals were sold at the POS.</li>
        <li><strong>Fragmented Sales Data:</strong> Without a centralized reporting layer, the owner couldn't compare branch performance, identify peak trading hours, or observe meaningful sales trends over time.</li>
        <li><strong>No Access Control:</strong> All staff operated under the same access level, creating risk of unauthorized changes to pricing, stock, or financial records.</li>
      </ul>

      <h2>Solution</h2>
      <ul>
        <li><strong>Hub-and-Spoke Transfer System:</strong> Built a dish transfer workflow where the central kitchen can dispatch prepared portions to specific branches, updating stock levels across all locations in real time with full transfer status tracking (Pending, In Transit, Received).</li>
        <li><strong>Smart Recipe Engine:</strong> Developed an automated ingredient deduction system that subtracts the exact quantity of raw ingredients from inventory whenever a cashier completes a sale — eliminating manual stock adjustments entirely.</li>
        <li><strong>Point of Sale Module:</strong> Designed a fast, branch-aware POS interface with real-time stock status indicators (OK, Low, Out of Stock), half-price support, cart management, and multiple payment methods.</li>
        <li><strong>Inventory Management:</strong> Built a full inventory module for both ingredients and retail items with minimum stock thresholds, low-stock alerts, audit history, and batch inventory auditing tools.</li>
        <li><strong>Sales Reports & Analytics:</strong> Developed daily, weekly, and monthly reporting views with KPI cards (total sales, transaction count, average spend, peak period), sales trend line charts, and transaction bar graphs.</li>
        <li><strong>Branch Performance Dashboard:</strong> Created a visual analytics dashboard comparing revenue and transaction volume across all branches, with pending transfer tracking and low-stock alert surfacing on the main overview.</li>
        <li><strong>Role-Based Access Control:</strong> Implemented multi-level user roles (Admin, Supervisor, Cashier) scoped to specific branches, ensuring staff only access the tools and data relevant to their role and location.</li>
        <li><strong>Credit Management:</strong> Added a credit and utang (tab) tracking system for customers purchasing on account, integrated directly into the POS checkout flow.</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li><strong>Full Operational Visibility:</strong> The owner can now manage all four locations from a single screen — knowing exactly what is in stock at each branch and which location is generating the most revenue at any given moment.</li>
        <li><strong>Eliminated Manual Calculations:</strong> Automated ingredient deductions and profit tracking replaced error-prone spreadsheet work, freeing the owner from daily manual reconciliation.</li>
        <li><strong>Data-Driven Menu Decisions:</strong> With real-time insight into top-selling dishes, category performance, and peak trading periods, the owner can make informed decisions about menu adjustments and staffing levels.</li>
        <li><strong>Scalable Architecture:</strong> The branch-aware, role-scoped system is designed to accommodate additional locations without structural changes, supporting future business growth.</li>
      </ul>
    `,
    stack: ['React', 'JavaScript', 'Node.js', 'MySQL', 'Chart.js'],
    tasks: ['Full-Stack Development', 'Database Design', 'POS UI', 'AI-Assisted Code Auditing', 'Role-Based Auth'],
    metrics: [
      { val: '4', lbl: 'Branches' },
      { val: '7+', lbl: 'Core Modules' },
      { val: '3', lbl: 'User Roles' }
    ],
    slides: [
      { ph: '⌥', label: 'Login — Branch Selection',    img: 'assets/projects/web-science/carinderia/login.png'           },
      { ph: '▦', label: 'Dashboard — Branch Overview', img: 'assets/projects/web-science/carinderia/dashboard.png'        },
      { ph: '◉', label: 'Point of Sale',               img: 'assets/projects/web-science/carinderia/pos.png'              },
      { ph: '〜', label: 'Inventory Management',        img: 'assets/projects/web-science/carinderia/inventory.png'        },
      { ph: '⊙', label: 'Dish & Item Management',      img: 'assets/projects/web-science/carinderia/dish_management.png'  },
      { ph: '◎', label: 'Dish Transfers',              img: 'assets/projects/web-science/carinderia/transfers.png'        },
      { ph: '⊡', label: 'Sales Reports & Analytics',   img: 'assets/projects/web-science/carinderia/reports.png'         },
      { ph: '⟦', label: 'User Management',             img: 'assets/projects/web-science/carinderia/user_management.png' }
    ]
  },
  'homeEcon_schoolEnrollment-correlation': {
    label: 'Data Science · Regional Correlation Study',
    title: 'Regional Correlation Study: Household Economics & School Enrollment',
    period: 'Dec 2025',
    thumb: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-1.jpg',
    body: `
      <p>A regional data mining and correlation study that integrates household socioeconomic indicators from the Filipino Family Income and Expenditure Survey (FIES) with K–12 school enrollment statistics from the Department of Education (DepEd) for Academic Year 2017–2018. Following the CRISP-DM methodology, the project applies descriptive statistics, correlation matrices, K-means clustering, and decision tree classifiers to uncover how family income, food expenditure share, and academic sector shape student track choices in Senior High School (SHS) across the Philippines.</p>
 
      <h2>Hypothesis</h2>
      <ul>
        <li><strong>Question:</strong> How do household socioeconomic constraints (specifically income, overall education spending, and food budget share) correlate with regional basic education enrollment and SHS strand preferences (e.g., STEM, ABM, TVL, GAS)?</li>
        <li><strong>Data Source:</strong> Philippine Statistics Authority (PSA) Filipino Family Income and Expenditure Survey (FFIES) and DepEd K-12 Regional Enrollment datasets, integrated via RapidMiner.</li>
        <li><strong>Scope:</strong> National household socioeconomic profiles linked with 26.24 million student enrollment records across all 17 administrative regions.</li>
      </ul>
 
      <h2>Method</h2>
      <ul>
        <li><strong>Data Processing & Integration:</strong> Normalized irregular region names, handled missing values, removed redundant columns (such as household appliance ownership), and merged datasets at the regional level.</li>
        <li><strong>Transformation & Scaling:</strong> Applied Z-Score transformation to skew-sensitive financial variables (income, expenditures) to enable standardized comparative analyses with regional student counts.</li>
        <li><strong>Statistical & Predictive Modeling:</strong> Computed Pearson correlation matrices, trained a K-Means clustering algorithm to profiles regional economic clusters, and built a Decision Tree classifier to discover the primary socioeconomic factors predicting SHS track enrollment.</li>
        <li><strong>Visualization:</strong> Created interactive, multi-tab Dashboards in Microsoft Power BI and designed custom reporting templates in Canva.</li>
      </ul>
 
      <h2>Findings</h2>
      <ul>
        <li><strong>Primary Predictor (Food Share):</strong> The decision tree established Food Share (the percentage of family budget spent on food) as the strongest predictor of SHS track choice. Regions with high food share (indicative of lower household income) lean heavily toward General Academic Strand (GAS).</li>
        <li><strong>High-Income Tracks:</strong> Higher household income and education expenditure are strongly correlated with specialized academic tracks, specifically Science, Technology, Engineering, and Math (STEM) and Accountancy, Business, and Management (ABM).</li>
        <li><strong>Academic Sector Disparity:</strong> Public schools show a clear orientation toward Technical-Vocational-Livelihood (TVL) tracks, while private schools and State/Local Universities (SUC/LUC) favor STEM/ABM. High enrollment in STEM increases the likelihood of the sector being Private by 38.66x.</li>
        <li><strong>Baseline Metrics:</strong> National average annual household income was found to be 233.79K PHP, with an average of only 4% of total household budget allocated to education.</li>
      </ul>
    `,
    stack: ['RapidMiner', 'Power BI', 'Excel', 'Canva', 'Python', 'PyMuPDF'],
    tasks: ['Data Integration', 'EDA', 'K-Means Clustering', 'AI-assisted Query Prototyping', 'Power BI Dashboard'],
    metrics: [
      { val: '26.2M', lbl: 'Enrollees' },
      { val: '233K',  lbl: 'Avg Income (PHP)' },
      { val: '4%',    lbl: 'Edu Budget Share' },
      { val: '38.6x', lbl: 'STEM Private Likelihood' }
    ],
    refs: [
      { label: 'Academic Paper (PDF)',      icon: '◈', file: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/houseEcon-schoolEnrollment_academic-paper_compressed.pdf' },
      { label: 'Analysis Results (PDF)',    icon: '◎', file: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/houseEcon-schoolEnrollment-analysis_result.pdf' },
      { label: 'Presentation Slides (PDF)',  icon: '◉', file: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/houseEcon-schoolEnrollment-slides_compressed.pdf' },
      { label: 'PSA FIES Dataset (Kaggle)',  icon: '⧉', url: 'https://www.kaggle.com/datasets/grosvenpaul/family-income-and-expenditure' },
      { label: 'DepEd Enrollment Dataset (Kaggle)', icon: '⧉', url: 'https://www.kaggle.com/datasets/raiblaze/philippines-school-enrollment-data/data?select=ph_school_enrollment.csv' }
    ],
    slides: [
      { ph: '▦', label: 'Title Slide: Study Overview',                   img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-1.jpg' },
      { ph: '◉', label: 'Research Gap & Context',                        img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-2.jpg' },
      { ph: '〜', label: 'Objectives & Findings: Enrollment Distribution', img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-3.jpg' },
      { ph: '⊙', label: 'Objectives & Findings: Correlation Analysis',     img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-4.jpg' },
      { ph: '◎', label: 'Objectives & Findings: SHS Strand Preferences',   img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-5.jpg' },
      { ph: '⊡', label: 'Objectives & Findings: Sector & Policy Insights', img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-6.jpg' },
      { ph: '⊞', label: 'Main Power BI Dashboard',                         img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-7.jpg' },
      { ph: '⟦', label: 'Policy Recommendations',                          img: 'assets/projects/data-science/homeEcon_schoolEnrollment-correlation/slide-8.jpg' }
    ]
  },
  flood_control: {
    label: 'Civic Analytics · DPWH Projects Analysis',
    title: 'DPWH Flood Control Projects: Spending & Performance Analysis',
    period: 'Jul 2022 – May 2025',
    thumb: 'assets/projects/data-science/flood-control/slide-6.png',
    body: `
      <p>An in-depth data science and visualization project analyzing 9,855 flood control projects implemented by the Department of Public Works and Highways (DPWH) across the Philippines. Sourced from <code>sumbongsapangulo.ph</code>, the project processes a consolidated contract dataset spanning from July 2022 to May 2025. By defining key metrics and designing interactive Power BI dashboards, the study evaluates annual budget utilization, regional funding equity, and contractor dominance/performance.</p>

      <h2>Objectives</h2>
      <ul>
        <li><strong>Annual Spending Efficiency:</strong> Track the ratio between approved budget and actual contract costs per fiscal year to compute the Annual Budget Utilization Rate.</li>
        <li><strong>Magnitude & Coverage:</strong> Audit the total project counts and contract costs to measure the overall scale of DPWH's flood mitigation operations.</li>
        <li><strong>Contractor Performance Index:</strong> Rank 2,409 contractors based on project counts, total contract values, and completion records to evaluate market concentration.</li>
        <li><strong>Regional Funding Equity:</strong> Analyze the distribution of financial resources across different administrative regions by computing the regional funding-to-project ratio.</li>
        <li><strong>Budget Discrepancies:</strong> Compare approved budgets against final contract costs to detect potential spending irregularities or cost overruns.</li>
      </ul>

      <h2>Methodology & Process</h2>
      <ul>
        <li><strong>Data Cleaning & Profiling:</strong> Compiled project records from <code>sumbongsapangulo.ph</code>, normalized project locations, and validated financial attributes (approved budgets vs. contract costs).</li>
        <li><strong>KPI Design:</strong> Implemented SMART objectives to define and calculate the Contractor Performance Index, Budget Utilization Rates, and Regional Funding Ratios.</li>
        <li><strong>Power BI Dashboarding:</strong> Designed a unified, multi-page interactive dashboard featuring geo-spatial maps of projects, contractor league tables, and annual expenditure comparisons.</li>
      </ul>

      <h2>Key Findings</h2>
      <ul>
        <li><strong>Overall Magnitude:</strong> DPWH allocated a total of <strong>₱545.65 Billion</strong> across <strong>9,855 projects</strong>, involving <strong>2,409 unique contractors</strong>.</li>
        <li><strong>Budget Discrepancy:</strong> Realized contract costs frequently diverged from approved budgets, highlighting opportunities for improved cost estimation and public bidding optimization.</li>
        <li><strong>Geographic Concentration:</strong> Funding allocation showed significant regional disparities, indicating potential misalignment between regional flood vulnerability and budget distribution.</li>
      </ul>
    `,
    stack: ['Power BI', 'Excel', 'Data Cleaning', 'Data Visualization'],
    tasks: ['Data Cleaning', 'KPI Engineering', 'Power BI Dashboarding', 'Spatial Analysis'],
    metrics: [
      { val: '₱545.6B', lbl: 'Total Funding' },
      { val: '9,855',   lbl: 'Projects' },
      { val: '2,409',   lbl: 'Contractors' },
      { val: '3 Years', lbl: 'Study Period' }
    ],
    refs: [
      { label: 'Project PDF Report', icon: '◎', file: 'assets/projects/data-science/flood-control/dpwh-flood_control.pdf' }
    ],
    slides: [
      { ph: '▦', label: 'Objective 1: Annual Budget Utilization Rate', img: 'assets/projects/data-science/flood-control/slide-1.png' },
      { ph: '◉', label: 'Objective 2: Project Count & Total Funding',    img: 'assets/projects/data-science/flood-control/slide-2.png' },
      { ph: '〜', label: 'Objective 3: Contractor Performance Index',     img: 'assets/projects/data-science/flood-control/slide-3.png' },
      { ph: '⊙', label: 'Objective 4: Regional Funding Equity Analysis', img: 'assets/projects/data-science/flood-control/slide-4.png' },
      { ph: '◎', label: 'Objective 5: Approved Budget vs. Contract Cost', img: 'assets/projects/data-science/flood-control/slide-5.png' },
      { ph: '⊡', label: 'Power BI Dashboard: DPWH Flood Control Projects', img: 'assets/projects/data-science/flood-control/slide-6.png' }
    ]
  },
  thesis: {
    badge: '⚗ In Progress — Ongoing Research',
    label: 'NLP Research · Undergraduate Thesis',
    title: 'TsekTxt: Taglish Election Misinformation Detection & Predictor Analysis',
    period: '2025 – 2027 (In Progress)',
    thumb: 'assets/projects/web-science/thesis/screenshots/01-landing.png',
    githubLink: 'https://github.com/hansjio/tsektxt-app',
    link: 'https://tsektxt-demo.vercel.app',
    linkText: 'Live Demo',
    body: `
      <p>An undergraduate thesis and NLP research project developed at Adamson University that tackles one of the most pressing challenges in Filipino digital discourse: the automated detection of election misinformation written in <strong>Taglish</strong> — the informal code-switched blend of Tagalog and English that dominates Philippine social media. The study benchmarks three state-of-the-art transformer models and uses model interpretability methods to surface the linguistic features that actually drive their predictions.</p>

      <h2>The Problem</h2>
      <ul>
        <li><strong>Code-Switching Gap:</strong> Most Filipino NLP research is trained on formal text, but election misinformation spreads primarily in informal Taglish — a variety that existing models are poorly calibrated for.</li>
        <li><strong>Model Opacity:</strong> Even high-performing classifiers operate as black boxes. Without interpretability, we cannot determine <em>which words, entities, or patterns</em> a model is actually using to flag content as misinformation — a critical gap for accountability and bias auditing.</li>
        <li><strong>Benchmark Vacuum:</strong> There is no existing comparative benchmark of transformer models on informal Taglish election-related credibility classification, making it impossible to make evidence-based model selection decisions for this domain.</li>
      </ul>

      <h2>Research Design</h2>
      <ul>
        <li><strong>Model Comparison:</strong> Fine-tune and benchmark three pre-trained transformers — <strong>RoBERTa-Tagalog</strong>, <strong>mBERT</strong>, and <strong>XLM-RoBERTa</strong> — on a combined Filipino misinformation corpus (24,000+ labeled samples) for binary credibility classification (credible vs. not credible).</li>
        <li><strong>Supplementary Taglish Dataset:</strong> Curate 300–500 manually annotated public posts from Facebook and X/Twitter spanning the 2022 Philippine presidential election period (Feb–May 2022), verified against <em>Vera Files</em> and <em>Tsek.ph</em> fact-checkers.</li>
        <li><strong>Two-Level Evaluation:</strong> Models are evaluated on both the formal training split (Level 1) and the new informal Taglish test set (Level 2) to measure domain generalization. Statistical significance assessed via McNemar's test.</li>
        <li><strong>Predictor Extraction:</strong> Apply <strong>Integrated Gradients</strong> (Captum) and <strong>SHAP</strong> on each model's predictions. Merge subword tokens, compute attribution scores, and identify consensus predictors where both methods agree — surfacing candidate names, political keywords, and informal Taglish phrases that most strongly drive misinformation classification.</li>
      </ul>

      <h2>TsekTxt — The Prototype</h2>
      <ul>
        <li><strong>Live Demonstration Interface:</strong> A web-based simulation interface built as a working proof-of-concept, allowing users to input Taglish text and receive real-time credibility predictions from all three models simultaneously, with Integrated Gradients word-level attribution highlights.</li>
        <li><strong>Three-Model Side-by-Side:</strong> Displays confidence scores and highlighted token attributions for RoBERTa-Tagalog, mBERT, and XLM-RoBERTa in a single view — making model agreement and disagreement immediately visible.</li>
        <li><strong>Built for Research Accessibility:</strong> Designed to make transformer-level NLP interpretability accessible to non-technical stakeholders, journalists, and fact-checkers — not just ML researchers.</li>
      </ul>

      <h2>Research Significance</h2>
      <ul>
        <li><strong>First Comparative Benchmark:</strong> Produces the first systematic head-to-head comparison of these three transformers on informal Taglish election misinformation, filling a critical gap in Filipino NLP research.</li>
        <li><strong>Interpretable AI for Journalism:</strong> The predictor extraction pipeline directly addresses the "black box" problem — enabling explainable, auditable misinformation detection that can support fact-checking workflows.</li>
        <li><strong>Bias Auditing:</strong> Attribution analysis reveals which candidate names, political entities, and language patterns are disproportionately weighted — providing evidence for bias detection in automated content moderation.</li>
      </ul>
    `,
    stack: ['Python', 'HuggingFace Transformers', 'RoBERTa-Tagalog', 'mBERT', 'XLM-RoBERTa', 'SHAP', 'Integrated Gradients', 'Captum', 'Gradio', 'Google Colab'],
    tasks: ['Thesis Research', 'Dataset Curation & Annotation', 'Model Fine-Tuning', 'Interpretability Analysis', 'Prototype Development', 'Academic Writing'],
    metrics: [
      { val: '3',     lbl: 'Transformer Models' },
      { val: '24K+',  lbl: 'Training Samples' },
      { val: '500',   lbl: 'Taglish Posts (Target)' },
      { val: '89.4%',  lbl: 'Best F1-Score' }
    ],
    refs: [
      { label: 'Thesis Chapters 1–3 (PDF)', icon: '◈', file: 'assets/projects/web-science/thesis/thesis-chapters-1-3.pdf' },
      { label: 'TsekTxt Proposal (PDF)',    icon: '◎', file: 'assets/projects/web-science/thesis/tsektxt-proposal.pdf' }
    ],
    slides: [
      { ph: '▦', label: 'Landing Page — tsek. home',              img: 'assets/projects/web-science/thesis/screenshots/01-landing.png'       },
      { ph: '◉', label: 'Checker — Text Input Interface',         img: 'assets/projects/web-science/thesis/screenshots/02-checker-input.png'  },
      { ph: '〜', label: 'Checker — Taglish Post Entered',         img: 'assets/projects/web-science/thesis/screenshots/03-checker-filled.png' },
      { ph: '⊙', label: 'Results — Credibility Signal Analysis',  img: 'assets/projects/web-science/thesis/screenshots/04-results.png'        },
      { ph: '◎', label: 'Methodology — Research Design Overview', img: 'assets/projects/web-science/thesis/screenshots/05-methodology.png'    },
      { ph: '⊡', label: 'Dashboard — Analysis History',           img: 'assets/projects/web-science/thesis/screenshots/06-dashboard.png'     }
    ]
  },
  malaria: {
    label: 'Data Science · Predictive Modeling',
    title: 'Malaria Predictor & Symptom Profile Analysis',
    period: 'Oct 2025',
    thumb: 'assets/projects/data-science/malaria/slide-1.png',
    body: `
      <p>A data mining and predictive analytics project that builds a machine learning classifier to predict malaria risk and profiles symptom prevalence across patient cohorts. Following standard data mining methodologies in RapidMiner, the model utilizes clinical data from 1,622 patient records to classify diagnoses and ranks symptoms based on their predictive feature weights. The project also investigates how demographic factors (age, sex, residence) correlate with symptom severity and diagnosis outcomes.</p>

      <h2>Objectives</h2>
      <ul>
        <li><strong>Diagnosis Balance:</strong> Assess malaria prevalence in the dataset by analyzing the ratio of positive vs. negative cases across 1,622 patients.</li>
        <li><strong>Demographic Profiling:</strong> Group diagnosis outcomes and symptom severity across different ages, sexes, and residential areas to identify high-risk cohorts.</li>
        <li><strong>Symptom Prevalence:</strong> Determine the overall symptom profile of malaria by analyzing the distribution of 11 distinct symptoms (fever, headache, vomiting, etc.) and average symptom counts.</li>
        <li><strong>Feature Importance:</strong> Rank symptoms based on their mathematical weight/contribution in predicting positive malaria cases.</li>
        <li><strong>Classifier Evaluation:</strong> Train and evaluate a Decision Tree classifier in RapidMiner to establish a high-accuracy, reliable diagnostic tool.</li>
        <li><strong>Age Correlation:</strong> Analyze the relationship between patient age and symptom presentation to identify age-based clinical differences.</li>
      </ul>

      <h2>Methodology & Process</h2>
      <ul>
        <li><strong>Data Preprocessing:</strong> Handled missing values, filtered redundant columns (such as model confidence columns), and renamed attributes (e.g., Target to Diagnosis, confidence(true) to Malaria_Risk_Chance) for clear data representation.</li>
        <li><strong>Decision Tree Classifier:</strong> Structured a model training pipeline with split validation (973 training records, 649 testing records) to generate a Decision Tree classifier.</li>
        <li><strong>Model Evaluation:</strong> Computed confusion matrices, measuring overall accuracy, precision, and predicted vs. actual diagnosis ratios.</li>
        <li><strong>Visualization Dashboard:</strong> Created an interactive Power BI dashboard to present patient demographics, symptom distribution, model weights, and performance metrics.</li>
      </ul>

      <h2>Key Findings</h2>
      <ul>
        <li><strong>Prevalence:</strong> The dataset of 1,622 patients contains 1,167 positive cases (71.95%) and 455 negative cases (28.05%), with males showing slightly higher positivity rates.</li>
        <li><strong>Predictive Symptoms:</strong> Symptoms averaged 5.45 per patient. **Chest Pain** emerged as the strongest predictor, contributing approximately 20% to the malaria diagnosis prediction.</li>
        <li><strong>Model Accuracy:</strong> The Decision Tree classifier achieved a high predictive accuracy of <strong>94.61%</strong> (Predicted Positive: 73%, Actual Positive: 72%).</li>
        <li><strong>Age Consistency:</strong> The correlation analysis indicated that patient age has a negligible effect on the number of symptoms experienced, proving that malaria symptom presentation is highly consistent across age groups.</li>
      </ul>
    `,
    stack: ['RapidMiner', 'Power BI', 'Excel', 'Data Mining', 'Decision Tree'],
    tasks: ['Predictive Modeling', 'Data Preprocessing', 'Feature Importance Analysis', 'Power BI Dashboarding'],
    metrics: [
      { val: '94.6%',  lbl: 'Model Accuracy' },
      { val: '1,622',  lbl: 'Patient Records' },
      { val: '11',     lbl: 'Symptoms Scanned' },
      { val: '20%',    lbl: 'Chest Pain Weight' }
    ],
    refs: [
      { label: 'Midterm Lab Report (PDF)', icon: '◈', file: 'assets/projects/data-science/malaria/malaria-documentation.pdf' },
      { label: 'Dashboard Report (PDF)',   icon: '◎', file: 'assets/projects/data-science/malaria/malaria-dashboard.pdf' },
      { label: 'Malaria Dataset (Kaggle)', icon: '⧉', url: 'https://www.kaggle.com/datasets/programmer3/malaria-diagnosis-dataset/data' }
    ],
    slides: [
      { ph: '▦', label: 'Title Slide & Project Overview',              img: 'assets/projects/data-science/malaria/slide-1.png' },
      { ph: '◉', label: 'Disease Focus: Malaria Study Introduction',     img: 'assets/projects/data-science/malaria/slide-2.png' },
      { ph: '〜', label: 'Overview of Project Objectives',                img: 'assets/projects/data-science/malaria/slide-3.png' },
      { ph: '⊙', label: 'Objective 1: Case Distribution & Diagnoses',     img: 'assets/projects/data-science/malaria/slide-4.png' },
      { ph: '◎', label: 'Objective 2: Demographic & Geographic Patterns', img: 'assets/projects/data-science/malaria/slide-5.png' },
      { ph: '⊡', label: 'Objective 3: Patient Symptom Profiling',         img: 'assets/projects/data-science/malaria/slide-6.png' },
      { ph: '⊞', label: 'Objective 4: Symptom Predictor Weights',         img: 'assets/projects/data-science/malaria/slide-7.png' },
      { ph: '⟦', label: 'Objective 5: Predictive Model Accuracy',         img: 'assets/projects/data-science/malaria/slide-8.png' },
      { ph: '⊠', label: 'Objective 6: Age vs. Symptom Counts',            img: 'assets/projects/data-science/malaria/slide-9.png' },
      { ph: '⧇', label: 'Project Summary & Key Findings',                img: 'assets/projects/data-science/malaria/slide-10.png' },
      { ph: '⧈', label: 'Data Source: Kaggle Dataset Link',              img: 'assets/projects/data-science/malaria/slide-11.png' }
    ]
  }
};


