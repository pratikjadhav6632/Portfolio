import fs from 'node:fs';
import path from 'node:path';
import {
  SITE_URL,
  BLOG_POSTS,
  GENERAL_BLOG_FAQS,
  buildBlogSchemaGraph
} from '../src/data/blogPosts.js';

const distDir = path.resolve(process.cwd(), 'dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Missing dist/index.html. Run `vite build` before prerendering.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function replaceTag(html, regex, replacement) {
  return html.replace(regex, replacement);
}

function renderRouteHtml({
  title,
  description,
  url,
  ogType,
  schemaGraph,
  noscriptBody
}) {
  let html = baseHtml;

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = replaceTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = replaceTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(url)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapeHtml(url)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );

  if (schemaGraph) {
    const schemaScript = `<script id="prerendered-structured-data" type="application/ld+json">${JSON.stringify(
      schemaGraph
    )}</script>`;
    html = html.replace('</head>', `    ${schemaScript}\n  </head>`);
  }

  const rootMarker = /<div id="root"><\/div>/i;
  if (rootMarker.test(html)) {
    html = html.replace(
      rootMarker,
      `<div id="root"><main style="max-width:960px;margin:0 auto;padding:48px 24px;font-family:sans-serif;color:#f4f3ea">${noscriptBody}</main></div>`
    );
  }

  return html;
}

const PORTFOLIO_FAQS = [
  {
    q: 'Is Pratik Jadhav available for full-time Software Developer jobs or freelance projects?',
    a: 'Yes. Pratik Jadhav has 1.5+ years of production software engineering experience and is open to both full-time Software Developer / MERN Full-Stack Engineer roles (Remote or On-Site) as well as freelance web, SaaS MVP, and React Native mobile app projects.'
  },
  {
    q: 'What is Pratik Jadhav’s core technology stack?',
    a: 'React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Redis caching, React Native (Expo), Tailwind CSS, JavaScript/TypeScript, REST APIs, Payment Gateways (PhonePe), and OpenAI/Vector integrations.'
  },
  {
    q: 'What measurable production results has Pratik delivered?',
    a: 'At QuirGO (with SSWW), helped power 38 organizations across HRM, CRM, Finance, and Project Management while cutting API latency from ~5 seconds to 790ms (~84% reduction) using Redis caching and DB indexing. Built Gaplify (115+ students, 10+ mentors), Foundrr Android app, and won the Avishkar Bharat Gold Medal.'
  },
  {
    q: 'How can recruiters or freelance clients contact Pratik Jadhav?',
    a: 'Email pratikjadhav6632@gmail.com, call or WhatsApp +91 8408868107, or connect via LinkedIn (linkedin.com/in/jadhavpratik-/) and GitHub (github.com/pratikjadhav6632).'
  }
];

// 0. Prerender / (homepage static fallback + dual-audience FAQ schema)
const homeRootHtml = `
  <header>
    <h1>Pratik Jadhav — Software Developer (MERN Stack &amp; React Native)</h1>
    <p>1.5+ years of production experience building full-stack web applications, multi-tenant SaaS platforms, and React Native Android apps in Pune, India. Available for Full-Time SDE roles (Remote / On-Site) and Freelance product builds worldwide.</p>
    <p>Email: <a href="mailto:pratikjadhav6632@gmail.com">pratikjadhav6632@gmail.com</a> · Phone: +91 8408868107 · <a href="https://www.linkedin.com/in/jadhavpratik-/">LinkedIn</a> · <a href="https://github.com/pratikjadhav6632">GitHub</a> · <a href="https://medium.com/@pratikjadhav6632">Medium</a></p>
  </header>
  <section>
    <h2>Experience &amp; Engineering Highlights</h2>
    <ul>
      <li><strong>QuirGO / SSWW:</strong> All-in-one SaaS suite (HRM, CRM, Finance, Project Management) adopted by 38 organizations; reduced API latency from ~5s to 790ms (~84%) via Redis caching &amp; indexing.</li>
      <li><strong>Gaplify (Founder &amp; Builder):</strong> Live EdTech mentorship platform with 115+ students and 10+ mentors.</li>
      <li><strong>Foundrr (Ex-Company):</strong> Built web &amp; React Native / Expo Android networking experiences.</li>
      <li><strong>QuantumITGurus (Freelance):</strong> Delivered client web development and custom CRM lead management.</li>
      <li><strong>Avishkar Bharat:</strong> Gold Medal winner, Special Achievement Trophy, and 13 university certificates.</li>
    </ul>
  </section>
  <section>
    <h2>Core Skills &amp; Freelance Services</h2>
    <p>React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Redis, React Native, Expo, Tailwind CSS, Payment Gateway Integration (PhonePe), SaaS MVP Architecture, System Design, OpenAI API.</p>
  </section>
  <section>
    <h2>Selected Shipped Projects (9)</h2>
    <ul>
      <li><a href="https://www.gaplify.in">Gaplify</a> — EdTech mentorship platform (React.js, Node.js, Express, MongoDB)</li>
      <li>MIRA — Personal AI companion exploring conversational intelligence, chat/voice, and persistent memory (OpenAI API, Node.js, React, Embeddings, Vector Databases, AI Systems)</li>
      <li><a href="https://quirgo.com">QuirGO</a> — Multi-tenant SaaS suite for 38 organizations</li>
      <li>WonderNest — Hotel discovery &amp; booking web app (Node.js, Express.js, MongoDB, EJS)</li>
      <li><a href="https://www.foundrr.co/">Foundrr</a> — Startup networking Android app (React Native, Expo, Node.js, MongoDB)</li>
      <li>Jotiba Constructions — Responsive business website</li>
      <li>CollegeSphere — Internal workflow automation software (NMiet LC)</li>
      <li>QuantumITGurus — Client website &amp; CRM lead management</li>
      <li>Oshni — Product showcase website for traditional Siddha wellness products</li>
    </ul>
  </section>
  <section>
    <h2>Engineering Articles</h2>
    <ul>
      ${BLOG_POSTS.map(
        (post) =>
          `<li><a href="${escapeHtml(`${SITE_URL}/blog/${post.id}`)}">${escapeHtml(post.title)}</a> — ${escapeHtml(post.excerpt)}</li>`
      ).join('')}
    </ul>
  </section>
  <section>
    <h2>Frequently Asked Questions</h2>
    ${PORTFOLIO_FAQS.map((f) => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`).join('')}
  </section>
`;

const homeHtml = baseHtml
  .replace(
    '</head>',
    `    <script id="prerendered-home-faq" type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: PORTFOLIO_FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    })}</script>\n  </head>`
  )
  .replace(
    /<div id="root"><\/div>/i,
    `<div id="root"><main style="max-width:960px;margin:0 auto;padding:48px 24px;font-family:sans-serif;color:#f4f3ea">${homeRootHtml}</main></div>`
  );

fs.writeFileSync(baseHtmlPath, homeHtml, 'utf8');

// 1. Prerender /blog
const blogIndexHtml = renderRouteHtml({
  title: 'Engineering Blog — System Design, Node.js & SaaS | Pratik Jadhav',
  description:
    'Technical articles by Pratik Jadhav covering System Design 101, PhonePe Node.js payment integration, Flipkart architecture insights, SaaS engineering mistakes, and startup lessons.',
  url: `${SITE_URL}/blog`,
  ogType: 'website',
  schemaGraph: buildBlogSchemaGraph(null),
  noscriptBody: `
    <h1>Engineering Blog — Pratik Jadhav</h1>
    <p>Practical notes on System Design, Node.js payments, and building SaaS products.</p>
    <ul>
      ${BLOG_POSTS.map(
        (post) =>
          `<li><a href="${escapeHtml(`${SITE_URL}/blog/${post.id}`)}">${escapeHtml(
            post.title
          )}</a> — ${escapeHtml(post.excerpt)} (<a href="${escapeHtml(
            post.mediumUrl
          )}">Medium</a>)</li>`
      ).join('')}
    </ul>
    <h2>Frequently Asked Questions</h2>
    ${GENERAL_BLOG_FAQS.map(
      (f) => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`
    ).join('')}
  `
});

const blogDir = path.join(distDir, 'blog');
fs.mkdirSync(blogDir, { recursive: true });
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml, 'utf8');

// 2. Prerender /blog/<slug> for each article
for (const post of BLOG_POSTS) {
  const postDir = path.join(blogDir, post.id);
  fs.mkdirSync(postDir, { recursive: true });

  const postHtml = renderRouteHtml({
    title: `${post.title} | Pratik Jadhav`,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.id}`,
    ogType: 'article',
    schemaGraph: buildBlogSchemaGraph(post),
    noscriptBody: `
      <article>
        <p>${escapeHtml(post.category)} · ${escapeHtml(post.readTime)}</p>
        <h1>${escapeHtml(post.title)}</h1>
        <p><strong>TL;DR:</strong> ${escapeHtml(post.tldr)}</p>
        <p><a href="${escapeHtml(post.mediumUrl)}">Read Full Post on Medium</a></p>
        ${post.sections
          .map(
            (section) => `
            <h2>${escapeHtml(section.heading)}</h2>
            ${(section.paragraphs || [])
              .map((p) => `<p>${escapeHtml(p)}</p>`)
              .join('')}
            ${
              section.list
                ? `<ul>${section.list
                    .map((item) => `<li>${escapeHtml(item)}</li>`)
                    .join('')}</ul>`
                : ''
            }
          `
          )
          .join('')}
        ${
          post.faqs?.length
            ? `<h2>FAQ</h2>${post.faqs
                .map((f) => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`)
                .join('')}`
            : ''
        }
      </article>
    `
  });

  fs.writeFileSync(path.join(postDir, 'index.html'), postHtml, 'utf8');
}

console.log(`Prerendered /blog and ${BLOG_POSTS.length} article routes in dist/blog/.`);
