// Edit this file to change the content of the site. Reload the page to see
// changes. No build step, no server — just edit and refresh.
window.__CONTENT__ = {

  // ── Header / hero ─────────────────────────────────────────────────────────
  meta: {
    title:      "cyberxcapsule",
    node:       "node // alexs // v4.17",          // top bracket line
    eyebrow:    "DFIR · RE · Offensive Ops",
    name:       "alexs",                            // big glitch name
    tagline:    "for the love of the game.",
    status:     "available for ops",
    geo:        "[REDACTED]",
    tty:        "/dev/pts/0",
    termUser:   "alexs",
    termHost:   "secnode",
    termSize:   "120×36",
    termTabs:   ["main", "ops", "notes"],           // first tab is active
  },

  // ── Skill sigils (the 4 hero tiles + the `skills` terminal command) ──────
  // Keep each `key` unique — it's also the argument to `skills <key>`.
  skills: [
    {
      key:     "dfir",
      glyph:   "⌕",
      code:    "01_DFIR",
      label:   "Digital Forensics & Incident Response",
      heading: "01 · DFIR",
      items: [
        "host + memory + network forensics",
        "evidence triage + recovery ",
        "timeline reconstruction",
        "forensics automation",
        "incident response support",
      ],
    },
    {
      key:     "sre",
      glyph:   "⟁",
      code:    "02_SRE",
      label:   "Security Research & Exploitation",
      heading: "02 · SRE",
      items: [
        "vulnerability research",
        "attack surface analysis",
        "cno/ offensive cyber capability development",
        "web + network analysis",
        "adversary tradecraft analysis",
      ],
    },
    {
      key:     "re",
      glyph:   "⎆",
      code:    "03_RE",
      label:   "Reverse Engineering",
      heading: "03 · RE",
      items: [
        "static + dynamic binary analysis",
        "malware RE + development",
        "mobile application RE",
        "obfuscation + capability identification",
        "control flow reconstruction",
      ],
    },
    {
      key:     "aia",
      glyph:   "⌖",
      code:    "04_AIA",
      label:   "AI Automation & Analytics",
      heading: "04 · AIA",
      items: [
        "AI workflow automation",
        "LLM pipeline integration",
        "scalable data analysis",
        "automated extraction + enrichment",
        "operational AI deployment",
      ],
    },
  ],

  // ── About card + `about` terminal command ────────────────────────────────
  about: {
    // HTML allowed. Use <span class="redact" title="hover to reveal">…</span>
    // to get the blocked-out hoverable text effect.
    cardHtml: `I take apart difficult technical problems — then turn what I learn into usable capabilities.
              Technical lead with experience in digital forensics, threat investigation, reverse engineering, and AI-powered workflow automation.
              Driven by mission impact, operational clarity, and building tools that solve real investigative problems.`,

    // Output of the `about` terminal command. Each string is one line.
    // Wrap accent phrases with {{a:…}} and they'll render in the accent color.
    terminalLines: [
      "// about.md",
      "I take apart difficult technical problems — then turn what I learn into usable capabilities.",
      "Technical lead with experience in digital forensics, threat investigation, reverse engineering, and AI-powered workflow automation.",
      "Driven by mission impact, operational clarity, and building tools that solve real investigative problems.",
      "",
      "motto: {{a:for the love of the game.}}",
    ],
  },

  // ── Contact card + `contact` terminal command ────────────────────────────
  contact: {
    // Shown as chips on the contact card. Each chip: { k: "prefix", v: "value", href }
    chips: [
      { k: "@",     v: "info@cyberxcapsule.com",        href: "mailto:info@cyberxcapsule.com" },
      { k: "git:",  v: "github.com/xvxd4sh",       href: "https://github.com/xvxd4sh" },
      { k: "sig:",  v: "xvxd4sh.01",               href: "#" },
      { k: "pgp:",  v: "----",    href: "#" },
    ],

    // `contact` terminal command rows.  Each row: [label, value, note?]
    terminalRows: [
      ["email",   "info@cyberxcapsule.com",                              ""],
      ["github",  "github.com/xvxd4sh",                             ""],
      ["signal",  "xvxd4sh.01",                                     ""],
      ["keybase", "keybase.io/alexs",                             ""],
      ["pgp",     "-----",                          "--"],
    ],
  },

  // ── `pgp` terminal command ───────────────────────────────────────────────
  pgp: {
    keyLine:     "---",
    fingerprint: "---",
    uid:         "---",
    sub:         "---",
  },

  // ── `whoami`, `uname`, `ls` terminal commands ────────────────────────────
  system: {
    uname:     "Linux secnode 6.9.0-ops #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux",
    uid:       1000,
    gid:       1000,
    userName:  "alexs",
    groupList: "1000(alexs),27(sudo),{{a:999(ops)}},{{a:420(dfir)}}",
    shell:     "/bin/zsh",
    home:      "/home/alexs",
    tz:        "[REDACTED]",
    lsOutput:  "{{a:about.md}}  {{a:skills.json}}  {{a:writeups/}}  {{a:contact.vcf}}  {{d:.bash_history}}  {{d:.ssh/}}",
  },

  // ── ASCII banner printed on boot and by `banner` ─────────────────────────
  // Each row is: [asciiLeft, commentRight]
  banner: [
    ["         _",                        ""],
    ["    __ _| | _____  _____   ",       ""],
    ["   / _` | |/ _ \\ \\/ / __|  ",      "//  v4.17"],
    ["  | (_| | |  __/>  <\\__ \\  ",      "//  © alexs — for the love of the game"],
    ["   \\__,_|_|\\___/_/\\_\\___/",        ""],
  ],

  // ── News card ────────────────────────────────────────────────────────────
  news: {
    // Card filter buttons. `key` matches feed `tag` (except 'all' = everything).
    filters: [
      { key: "all",  label: "ALL" },
      { key: "sec",  label: "CYBER" },
      { key: "ai",   label: "AI" },
      { key: "tech", label: "TECH" },
    ],

    // RSS feeds. `tag` must match one of the filter keys above (uppercased).
    // Fetched via api.rss2json.com (public CORS proxy) — works from file://.
    feeds: [
      { url: "https://feeds.feedburner.com/TheHackersNews",     source: "HackerNews",       tag: "SEC"  },
      { url: "https://www.bleepingcomputer.com/feed/",          source: "BleepingComputer", tag: "SEC"  },
      { url: "https://krebsonsecurity.com/feed/",               source: "Krebs",            tag: "SEC"  },
      { url: "https://www.darkreading.com/rss.xml",             source: "DarkReading",      tag: "SEC"  },
      { url: "https://www.schneier.com/blog/atom.xml",          source: "Schneier",         tag: "SEC"  },
      { url: "https://openai.com/blog/rss.xml",                 source: "OpenAI",           tag: "AI"   },
      { url: "https://www.anthropic.com/news/rss.xml",          source: "Anthropic",        tag: "AI"   },
      { url: "https://www.deepmind.com/blog/rss.xml",           source: "DeepMind",         tag: "AI"   },
      { url: "https://venturebeat.com/category/ai/feed/",       source: "VentureBeat",      tag: "AI"   },
      { url: "https://techcrunch.com/feed/",                    source: "TechCrunch",       tag: "TECH" },
      { url: "https://www.theverge.com/rss/index.xml",          source: "The Verge",        tag: "TECH" },
      { url: "https://arstechnica.com/feed/",                   source: "Ars Technica",     tag: "TECH" },
    ],
  },
};
