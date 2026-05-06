const PROJECTS = {
  lupon: {
      thumb: 'assets/projects/lupon/dashboard.png',
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
      { label: 'System User Manual', icon: '◎', file: 'assets/projects/lupon/USER-MANUAL-1.pdf' },
      { label: 'Final Paper', icon: '◈', file: 'assets/projects/lupon/FINAL-PAPER.pdf' }
    ],
    slides: [
      { ph: '⌥', label: 'Login Page',                    img: 'assets/projects/lupon/login.png' },
      { ph: '▦', label: 'Dashboard — KPI & Case Charts', img: 'assets/projects/lupon/dashboard.png' },
      { ph: '◉', label: 'Cases Module',                  img: 'assets/projects/lupon/cases.png' },
      { ph: '〜', label: 'Reports — Export to Excel',     img: 'assets/projects/lupon/reports.png' },
      { ph: '⊙', label: 'Settings — Backup & Restore',   img: 'assets/projects/lupon/settings.png' },
      { ph: '◎', label: 'System Logs',                   img: 'assets/projects/lupon/logs.png' },
      { ph: '⊡', label: 'Archive Module',                img: 'assets/projects/lupon/archive.png' }
    ]
  },
  carinderia: {
    label: 'Full-Stack Web Development · Freelance',
    title: 'Carinderia POS: Multi-Branch Point of Sale System',
    period: '2025',
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
    tasks: ['Full-Stack Development', 'Database Design', 'POS UI', 'Analytics', 'Role-Based Auth'],
    metrics: [
      { val: '4', lbl: 'Branches' },
      { val: '7+', lbl: 'Core Modules' },
      { val: '3', lbl: 'User Roles' }
    ],
    slides: [
      { ph: '⌥', label: 'Login — Branch Selection',        img: 'assets/projects/carinderia/login.png' },
      { ph: '▦', label: 'Dashboard — Branch Overview',     img: 'assets/projects/carinderia/dashboard.png' },
      { ph: '◉', label: 'Point of Sale',                   img: 'assets/projects/carinderia/pos.png' },
      { ph: '〜', label: 'Inventory Management',            img: 'assets/projects/carinderia/inventory.png' },
      { ph: '⊙', label: 'Dish & Item Management',          img: 'assets/projects/carinderia/dishes.png' },
      { ph: '◎', label: 'Dish Transfers',                  img: 'assets/projects/carinderia/transfers.png' },
      { ph: '⊡', label: 'Sales Reports & Analytics',       img: 'assets/projects/carinderia/reports.png' },
      { ph: '⟦', label: 'User Management',                 img: 'assets/projects/carinderia/users.png' }
    ]
  }
};
