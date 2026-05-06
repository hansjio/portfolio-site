const BLOG_POSTS = {
  'cli-go':{
    title:'Writing a CLI from scratch in Go: the architecture decisions I\'d make again',
    date:'Apr 18, 2025',readtime:'8 min read',category:'Engineering',
    tags:['go','cli','architecture','devtools'],
    body:`
      <p>After shipping Obsidian CLI, I spent some time cataloguing the design choices that aged well and the ones that didn't. Spoiler: the Cobra opinionation is worth it; the custom config parser was not.</p>
      <h2>Why Go for a CLI?</h2>
      <p>The answer most people give is static binaries and cross-compilation. Both true. But the bigger reason for me was goroutines — when you're orchestrating multiple subprocess streams simultaneously, Go's concurrency model maps almost directly to the mental model of "this thing runs in the background while that thing runs in the foreground."</p>
      <h3>The Cobra Decision</h3>
      <p>Cobra is opinionated. It has strong opinions about how commands are structured, how flags are parsed, how help text is generated. Early on this felt constraining. By month three it was the thing keeping the codebase sane.</p>
      <p>The pattern I'd recommend: build every command as a standalone package with its own <code>cmd.go</code>. Wire them to the root in <code>main.go</code>. Keep business logic out of the command layer entirely — it belongs in <code>internal/</code>.</p>
      <h2>The Config Parser Mistake</h2>
      <p>I wrote a custom YAML parser because I wanted "nice error messages." This was a mistake. The nice error messages took three weeks to get right and I still found edge cases six months later. Viper exists. Use Viper.</p>
      <h3>What I'd Do Differently</h3>
      <p>Start with integration tests that invoke the binary directly. Unit tests are useful but they don't catch the class of bugs that appear when you wire everything together. A simple shell script that runs <code>obsidian init</code> and checks the exit code would have caught four separate regressions that slipped through my unit suite.</p>
      <blockquote>The CLI is the API. Every flag is a contract. Every error message is documentation.</blockquote>
      <p>That framing changed how I thought about the whole project. When you internalize that the command interface is a public API — even for a solo tool — you stop being cavalier about breaking changes.</p>
    `
  },
  'feature-drift':{
    title:'On feature drift and why your model rots faster than you think',
    date:'Mar 2, 2025',readtime:'6 min read',category:'Data Science',
    tags:['ml','monitoring','mlops','drift'],
    body:`
      <p>Real-world ML isn't a Kaggle notebook. This is everything I wish I'd known before building the Temporal Drift Detector — and what the monitoring actually looked like at scale.</p>
      <h2>The Slow Rot</h2>
      <p>Model degradation rarely announces itself. It creeps. A feature that was predictive in Q1 becomes noise by Q3 because the underlying distribution shifted — not dramatically, but enough. Your F1 drops from 0.94 to 0.89, and nobody files a ticket because 0.89 still feels fine.</p>
      <p>Then it drops to 0.81. Now people notice. But the rot started six months ago.</p>
      <h3>What We Actually Monitored</h3>
      <p>Population Stability Index for categorical features. Kolmogorov-Smirnov for continuous ones. Neither is perfect but both are cheap to compute on a streaming window.</p>
      <p>The more interesting signal turned out to be <em>prediction distribution drift</em> — when the model's output distribution shifts even if inputs look stable, that's usually a sign that the joint distribution changed in a way PSI didn't catch.</p>
      <h2>The Cyclic Pattern Finding</h2>
      <p>The original hypothesis was that features decay in predictable cyclic patterns. This turned out to be mostly true — with a caveat. The cycles are real, but they're tied to business calendar events, not calendar weeks. Black Friday resets the retail feature distributions. Tax season does it for fintech. You have to know your domain.</p>
      <blockquote>Monitor for drift. But understand what causes the cycles before you build the alerting.</blockquote>
    `
  },
  'canonet':{
    title:'The Canonet QL17 as a street camera: a year in',
    date:'Jan 14, 2025',readtime:'5 min read',category:'Film',
    tags:['film','street-photography','canonet','hp5'],
    body:`
      <p>A compact rangefinder from 1972 vs. the streets of Metro Manila. Why fixed lenses force better decisions and what happened when I pushed HP5 to 3200 in Divisoria.</p>
      <h2>Why the Canonet?</h2>
      <p>The short answer: it's quiet, it's small, and it has a 40mm f/1.7 lens that's genuinely excellent wide open. The long answer involves three months of GAS and a spreadsheet comparing rangefinders from 1968 to 1983.</p>
      <p>The 40mm focal length is underrated. Wide enough to get context, tight enough to isolate a subject. It forces compositional decisions that 35mm doesn't — you can't just lean in on the wide end to fix a sloppy frame.</p>
      <h3>Shooting HP5 at 3200 in Divisoria</h3>
      <p>Divisoria is the kind of place where available light is a negotiation. Stalls, tarps, crowds. I rated HP5 at 3200 and souped in Rodinal 1:25 for 20 minutes at 20°C. The grain is heavy. The shadows block up completely. It's exactly right.</p>
      <p>Some shots I'm keeping from that roll: a woman weighing spices with her back to me; a trike driver asleep against his handlebars; a stack of rubber sandals lit by one fluorescent tube.</p>
      <h2>What a Year Taught Me</h2>
      <p>Fixed lenses aren't a constraint — they're a decision. You learn the angle of view. After a year with the 40mm I can pre-visualize compositions while walking without lifting the camera. That's the whole point.</p>
      <blockquote>The camera should disappear. The Canonet gets close.</blockquote>
    `
  },
  'neovim':{
    title:'My Neovim setup for data engineering, annotated',
    date:'Nov 28, 2024',readtime:'7 min read',category:'Tools',
    tags:['neovim','editor','python','go','tooling'],
    body:`
      <p>LSP configs for Python, Go, and SQL; tmux sessions for multi-service dev; the keybindings I actually use. A living document, updated when something breaks.</p>
      <h2>The Core Philosophy</h2>
      <p>I don't use a distribution. No LazyVim, no AstroNvim. Bare Neovim with plugins I understand. This means setup takes longer once and debugging takes much less time forever.</p>
      <p>My <code>init.lua</code> is ~400 lines. Everything in it I can explain. That's the bar I'd set for anyone starting out.</p>
      <h3>LSP Setup</h3>
      <p>Three languages do 95% of my work: Python (data pipelines, ML), Go (backend, CLI tools), SQL (basically everywhere). Here's the config that's survived the longest:</p>
      <pre><code>require('lspconfig').pyright.setup({
  settings = {
    python = {
      analysis = {
        typeCheckingMode = "basic",
        useLibraryCodeForTypes = true
      }
    }
  }
})</code></pre>
      <p>Pyright is strict enough to be useful and lenient enough not to yell at you for pandas idioms.</p>
      <h3>The tmux Session Structure</h3>
      <p>One session per project. Within each session: window 1 is always the editor, window 2 is always a shell, window 3 is always logs/monitoring. This consistency means muscle memory works across projects.</p>
      <h2>Keybindings I Actually Use</h2>
      <p><code>&lt;leader&gt;ff</code> — fuzzy file finder. <code>&lt;leader&gt;fg</code> — live grep. <code>gd</code> — go to definition. <code>gr</code> — go to references. <code>&lt;leader&gt;ca</code> — code action. That's genuinely most of it.</p>
      <blockquote>The best editor setup is the one you stop thinking about.</blockquote>
    `
  }
};
