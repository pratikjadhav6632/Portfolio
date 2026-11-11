export const SITE_URL = 'https://pratik-jadhav-portfolio.netlify.app';
export const MEDIUM_PROFILE_URL = 'https://medium.com/@pratikjadhav6632';

export const BLOG_POSTS = [
  {
    id: 'system-design-101-14-core-components',
    title: 'System Design 101: 14 Core Components Every Developer Should Understand',
    category: 'System Design',
    tags: ['System Design', 'Load Balancing', 'Caching', 'Databases', 'Architecture'],
    excerpt:
      'A clear, structured breakdown of the 14 foundational building blocks behind scalable distributed systems—from DNS and Load Balancers to Sharding, Message Queues, and Observability.',
    tldr:
      'Modern scalable systems combine 14 core layers: Client, DNS, Load Balancers, API Gateways, Application Servers, In-Memory Caches, CDNs, SQL/NoSQL Databases, Replication & Sharding, Message Queues, Rate Limiters, Search Engines, Observability, and Blob Storage.',
    readTime: '10 min read',
    publishedLabel: 'Medium · System Design',
    featured: true,
    coverGradient: 'from-[#d4ff32]/25 via-[#1f2913] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/system-design-101-14-core-components-every-developer-should-understand-e54f5730086a',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'Why System Design Starts With Building Blocks',
        paragraphs: [
          'Understanding distributed architecture is less about memorizing buzzwords and more about knowing which bottleneck each component removes. Every high-traffic web or mobile platform is assembled from the same core building blocks working together.'
        ]
      },
      {
        heading: 'The 14 Core System Design Components',
        list: [
          'Client Layer: Web, Android, and iOS interfaces managing local state and initiating HTTP/WebSocket requests.',
          'DNS (Domain Name System): Translates human-readable domains into IP addresses and enables geo-routing.',
          'Load Balancers: Distribute traffic across healthy application servers (L4 Transport / L7 Application) to prevent single points of failure.',
          'API Gateway & Reverse Proxy: Centralizes authentication, SSL termination, routing, and request validation.',
          'Application Servers: Stateless compute nodes executing core business logic that scale horizontally.',
          'In-Memory Caches (Redis / Memcached): Store hot reads in RAM to cut database load and drop response latency from seconds to milliseconds.',
          'CDN (Content Delivery Network): Serves static assets from edge locations closest to users.',
          'Databases (SQL & NoSQL): Relational stores (PostgreSQL/MySQL) for ACID transactions; NoSQL (MongoDB/Cassandra) for flexible schemas and horizontal scale.',
          'Replication & Sharding: Read replicas scale read-heavy traffic; horizontal sharding partitions massive datasets across nodes.',
          'Message Queues & Event Streaming: Kafka, RabbitMQ, or SQS decouple heavy background jobs and absorb traffic spikes.',
          'Rate Limiters: Protect APIs from abuse, DDoS bursts, and runaway clients.',
          'Search & Indexing Engines: Elasticsearch or Solr power fast fuzzy, full-text queries across millions of records.',
          'Logging, Monitoring & Alerting: Observability stacks (Prometheus, Grafana, ELK) catch latency spikes and errors early.',
          'Blob / Object Storage: S3-compatible storage handles images, videos, and backups outside primary databases.'
        ]
      }
    ],
    codeSnippet: {
      label: 'Request Flow Pattern',
      code: `Client -> DNS -> CDN / Load Balancer -> API Gateway (Rate Limit + Auth)
       -> Stateless App Servers -> Redis Cache (Hit) / Primary DB (Miss)
       -> Message Queue -> Async Workers -> Observability Metrics`
    },
    faqs: [
      {
        q: 'What are the most important system design components to learn first?',
        a: 'Start with DNS, Load Balancers, API Gateways, Caching (Redis), SQL vs. NoSQL databases, and Message Queues—these appear in nearly every real-world backend architecture.'
      },
      {
        q: 'When should you add Redis caching to a backend system?',
        a: 'Add caching when read-heavy queries repeat frequently or database aggregations create latency spikes, while keeping invalidation rules clear.'
      }
    ]
  },
  {
    id: 'phonepe-payment-gateway-nodejs-guide',
    title: 'PhonePe Payment Gateway Integration with Node.js: A Beginner’s Complete Guide (2025)',
    category: 'Backend & Payments',
    tags: ['Node.js', 'Express.js', 'PhonePe API', 'Payment Gateway', 'SHA256'],
    excerpt:
      'Step-by-step Node.js and Express guide to integrating the PhonePe Payment Gateway—covering Base64 payload encoding, SHA256 X-VERIFY checksums, callbacks, and status verification.',
    tldr:
      'PhonePe Node.js integration works in three steps: encode the transaction payload in Base64, sign it using SHA256(base64Payload + "/pg/v1/pay" + saltKey) + "###" + saltIndex as the X-VERIFY header, and verify final payment status server-side via /pg/v1/status.',
    readTime: '9 min read',
    publishedLabel: 'Medium · Backend Guide (2025)',
    featured: true,
    coverGradient: 'from-[#a855f7]/25 via-[#25132d] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/phonepe-payment-gateway-integration-with-node-js-a-beginners-complete-guide-2025-cfcb4a08116d',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'How PhonePe Server-to-Server Checkout Works',
        paragraphs: [
          'Unlike simple client-only checkout scripts, PhonePe requires cryptographic request signing on your Node.js server so transaction amounts and merchant credentials can never be tampered with in the browser.',
          'Always convert amounts into paise (amount * 100), generate a unique merchantTransactionId per attempt, and confirm final status from your backend before fulfilling an order.'
        ]
      },
      {
        heading: 'Core Integration Checklist',
        list: [
          'Configure Merchant ID, Salt Key, Salt Index, and Sandbox/Production host URL in environment variables.',
          'Base64-encode the JSON transaction payload including redirectUrl and callbackUrl.',
          'Generate the X-VERIFY header using SHA256(base64Payload + "/pg/v1/pay" + SALT_KEY) + "###" + SALT_INDEX.',
          'Verify payment completion on /pg/v1/status/{merchantId}/{merchantTransactionId} with its matching status checksum.'
        ]
      }
    ],
    codeSnippet: {
      label: 'Node.js Checksum Signing Pattern',
      code: `const payloadBase64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64');
const stringToSign = payloadBase64 + '/pg/v1/pay' + process.env.PHONEPE_SALT_KEY;
const sha256 = crypto.createHash('sha256').update(stringToSign).digest('hex');
const xVerify = \`\${sha256}###\${process.env.PHONEPE_SALT_INDEX}\`;`
    },
    faqs: [
      {
        q: 'How is the X-VERIFY checksum generated for PhonePe in Node.js?',
        a: 'Concatenate the Base64 payload, the API endpoint path (/pg/v1/pay), and your Salt Key, hash with SHA-256 in hex, and append ### followed by the Salt Index.'
      },
      {
        q: 'Why should you verify payment status on the backend instead of trusting the redirect URL?',
        a: 'Browser redirects can be interrupted or spoofed; querying PhonePe’s /pg/v1/status endpoint server-side with X-VERIFY ensures authoritative payment confirmation before updating your database.'
      }
    ]
  },
  {
    id: 'flipkart-system-design-lessons',
    title: 'I Tried to Buy a Product on Flipkart. Instead, I Learned About System Design.',
    category: 'System Design',
    tags: ['System Design', 'E-Commerce', 'Concurrency', 'Scalability'],
    excerpt:
      'What a real-world e-commerce checkout flow reveals about distributed inventory locking, flash-sale concurrency, caching, and fault-tolerant order pipelines.',
    tldr:
      'Every e-commerce checkout flow hides hard distributed-systems trade-offs: preventing overselling under concurrent flash-sale traffic, isolating search from checkout, caching catalog reads, and keeping payment webhooks idempotent.',
    readTime: '7 min read',
    publishedLabel: 'Medium · Case Study',
    featured: false,
    coverGradient: 'from-[#38bdf8]/25 via-[#0f2838] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/i-tried-to-buy-a-product-on-flipkart-instead-i-learned-about-system-design-7ca26e270310',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'From Everyday Shopping to Distributed Architecture',
        paragraphs: [
          'Clicking "Buy Now" feels instantaneous, yet behind that single button sit inventory reservation locks, price/offer validation, regional warehouse routing, and payment state machines.',
          'Observing where real-world checkouts slow down or fail during peak sales makes abstract system design trade-offs—like eventual consistency for product views vs. strict consistency for stock deduction—immediately concrete.'
        ]
      },
      {
        heading: 'Key E-Commerce Engineering Lessons',
        list: [
          'Separate high-read catalog browsing (cached/indexed) from transactional inventory writes.',
          'Use short-lived inventory reservations and atomic updates to prevent overselling during concurrent checkouts.',
          'Design asynchronous post-order notifications and logistics events via message queues so checkout stays fast.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Why do e-commerce platforms separate catalog reads from order writes?',
        a: 'Browsing traffic is vastly higher than checkout traffic and tolerates cached eventual consistency, while inventory and payments require strict transactional guarantees.'
      }
    ]
  },
  {
    id: 'every-mistake-building-saas-tony-stark',
    title: 'Every Mistake I Made Building SaaS (And What Tony Stark Taught Me About It)',
    category: 'SaaS & Startups',
    tags: ['SaaS', 'Product Engineering', 'Multi-Tenancy', 'Startups'],
    excerpt:
      'Candid architectural, product, and scaling mistakes from building real SaaS software—and why iterative engineering beats trying to build the Mark 85 on day one.',
    tldr:
      'Shipping a SaaS product fails when you over-engineer before validating user workflows, neglect multi-role edge cases, or skip performance instrumentation until queries slow down. Iterate fast like Mark I -> Mark II -> Mark 85.',
    readTime: '8 min read',
    publishedLabel: 'Medium · SaaS Engineering',
    featured: true,
    coverGradient: 'from-[#ff6854]/25 via-[#2e1712] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/every-mistake-i-made-building-saas-and-what-tony-stark-taught-me-about-it-b3ec63bc8207',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'Build the Suit That Solves Today’s Problem',
        paragraphs: [
          'When building multi-module SaaS systems, it is tempting to architect every future feature upfront. In reality, complexity compounds quickly across permissions, billing states, and tenant boundaries.',
          'Like Tony Stark upgrading each suit after discovering real-world failure modes in flight, great SaaS engineering ships lean, observes real bottlenecks, and hardens architecture based on live feedback.'
        ]
      },
      {
        heading: 'Mistakes Worth Avoiding',
        list: [
          'Over-building abstractions before real organizational workflows are tested with users.',
          'Underestimating role-based access control (RBAC) and cross-module data dependencies.',
          'Waiting too long to profile database queries and add indexing or Redis caching.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is the biggest technical mistake when building an early-stage SaaS?',
        a: 'Over-engineering speculative complexity upfront while ignoring real user workflows, RBAC edge cases, and query performance profiling.'
      }
    ]
  },
  {
    id: 'developer-with-1-5-years-of-experience',
    title: 'I’m a Developer With 1.5 Years of Experience. Here’s What I Actually Know.',
    category: 'Career & Engineering',
    tags: ['Software Engineering', 'Career Growth', 'Full Stack', 'Problem Solving'],
    excerpt:
      'An honest reflection on moving past syntax memorization—what 1.5 years of shipping startups, mobile apps, and SaaS actually teaches you about engineering.',
    tldr:
      'After 1.5 years of real product work, the biggest shift is realizing engineering isn’t memorizing frameworks—it’s debugging under uncertainty, reading docs fast, understanding trade-offs, and owning outcomes end-to-end.',
    readTime: '6 min read',
    publishedLabel: 'Medium · Engineering Reflections',
    featured: false,
    coverGradient: 'from-[#10b981]/25 via-[#0e2c21] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/im-a-developer-with-1-5-years-of-experience-here-s-what-i-actually-know-67b41f889929',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'Beyond Frameworks and Tutorials',
        paragraphs: [
          'Early on, it feels like great developers know every API by heart. In production, real engineering looks very different: breaking vague requirements into clear steps, tracing why something failed in production, and shipping reliable fixes.',
          'Working across startups, client deliverables, and full-stack systems proves that fundamentals—HTTP, databases, state management, and clear communication—outlast every passing framework trend.'
        ]
      },
      {
        heading: 'What Actually Compounds Over Time',
        list: [
          'Debugging methodically instead of guessing randomly.',
          'Understanding data models and user journeys before writing components.',
          'Asking the right questions early so you solve the actual business problem.'
        ]
      }
    ],
    faqs: [
      {
        q: 'What separates real-world engineering experience from tutorial coding?',
        a: 'Ownership of ambiguous requirements, systematic debugging in production, data modeling, and understanding user and business impact beyond syntax.'
      }
    ]
  },
  {
    id: 'honesty-in-first-startup-job',
    title: 'What I Learned About Honesty in My First Startup Job (And Why It Matters More Than Your Skills)',
    category: 'Career & Engineering',
    tags: ['Startup Culture', 'Engineering Ethics', 'Ownership', 'Teamwork'],
    excerpt:
      'Why transparent communication, admitting gaps early, and owning mistakes build far more trust in a fast-moving startup team than pretending to know everything.',
    tldr:
      'In a startup, hiding blockers or overpromising creates silent technical debt and missed deadlines. Radical honesty—flagging risks early, saying "I don’t know yet, let me check," and owning mistakes—builds lasting engineering trust.',
    readTime: '5 min read',
    publishedLabel: 'Medium · Startup Lessons',
    featured: false,
    coverGradient: 'from-[#f59e0b]/25 via-[#2d2212] to-[#12140e]',
    mediumUrl:
      'https://medium.com/@pratikjadhav6632/what-i-learned-about-honesty-in-my-first-startup-job-and-why-it-matters-more-than-your-skills-c992057a4b14',
    author: {
      name: 'Pratik Jadhav',
      role: 'MERN Stack Developer & Product Engineer',
      avatar: 'PJ'
    },
    sections: [
      {
        heading: 'Trust Moves Startups Faster Than Ego',
        paragraphs: [
          'Early in your first startup role, the pressure to prove yourself can tempt you to hide confusion or give optimistic estimates. Yet startups move at high speed with thin margins for surprises.',
          'Being upfront when a requirement is unclear, an estimate needs adjustment, or a bug slips through turns teammates into collaborators instead of putting launches at risk.'
        ]
      },
      {
        heading: 'Practical Habits for High-Trust Teams',
        list: [
          'Communicate blockers early while there is still time to adjust scope.',
          'Own bugs transparently alongside a clear root-cause and fix plan.',
          'Optimize for the product succeeding rather than looking smart in standups.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Why does honesty matter so much for junior engineers in startups?',
        a: 'Startups rely on accurate status and fast iteration; flagging blockers early prevents cascading delays and builds strong trust with founders and senior engineers.'
      }
    ]
  }
];

export const GENERAL_BLOG_FAQS = [
  {
    q: 'What topics does Pratik Jadhav write about on his engineering blog?',
    a: 'Pratik writes practical, experience-backed guides on System Design (14 core components and e-commerce case studies), Backend & Payments (PhonePe gateway integration with Node.js), SaaS engineering mistakes, and early-career startup lessons.'
  },
  {
    q: 'Where are Pratik Jadhav’s full technical articles published?',
    a: 'All six articles are published on Medium (@pratikjadhav6632) and curated here with structured TL;DR summaries, key takeaways, and technical Q&As for quick reference.'
  },
  {
    q: 'How does PhonePe payment gateway integration work in Node.js?',
    a: 'Your Node.js backend encodes the transaction JSON payload in Base64, generates a SHA-256 X-VERIFY checksum signed with your Salt Key and Salt Index, posts to /pg/v1/pay, and verifies transaction completion server-side via /pg/v1/status.'
  },
  {
    q: 'What are the 14 core components of System Design 101?',
    a: 'They include Client Layer, DNS, Load Balancers, API Gateways, Application Servers, Caches, CDNs, SQL/NoSQL Databases, Replication & Sharding, Message Queues, Rate Limiters, Search Engines, Observability (Logging/Monitoring), and Blob Storage.'
  }
];

export const CATEGORIES = [
  'All',
  'System Design',
  'Backend & Payments',
  'SaaS & Startups',
  'Career & Engineering'
];

export function buildBlogSchemaGraph(activePost = null) {
  const faqsForSchema = activePost ? activePost.faqs : GENERAL_BLOG_FAQS;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Portfolio',
            item: `${SITE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Engineering Blog',
            item: `${SITE_URL}/blog`
          },
          ...(activePost
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: activePost.title,
                  item: `${SITE_URL}/blog/${activePost.id}`
                }
              ]
            : [])
        ]
      },
      ...(activePost
        ? [
            {
              '@type': 'BlogPosting',
              headline: activePost.title,
              description: activePost.excerpt,
              articleSection: activePost.category,
              keywords: activePost.tags.join(', '),
              url: `${SITE_URL}/blog/${activePost.id}`,
              isBasedOn: activePost.mediumUrl,
              mainEntityOfPage: `${SITE_URL}/blog/${activePost.id}`,
              author: {
                '@type': 'Person',
                '@id': `${SITE_URL}/#person`,
                name: 'Pratik Jadhav',
                url: `${SITE_URL}/`,
                sameAs: [
                  'https://www.linkedin.com/in/jadhavpratik-/',
                  'https://github.com/pratikjadhav6632',
                  MEDIUM_PROFILE_URL
                ]
              }
            }
          ]
        : [
            {
              '@type': 'Blog',
              '@id': `${SITE_URL}/blog`,
              url: `${SITE_URL}/blog`,
              name: 'Pratik Jadhav Engineering Blog',
              description:
                'Technical articles by Pratik Jadhav covering System Design 101, PhonePe Node.js payment integration, Flipkart architecture insights, SaaS engineering mistakes, and startup lessons.',
              author: { '@id': `${SITE_URL}/#person` },
              blogPost: BLOG_POSTS.map((post) => ({
                '@type': 'BlogPosting',
                headline: post.title,
                url: `${SITE_URL}/blog/${post.id}`,
                sameAs: post.mediumUrl,
                author: { '@id': `${SITE_URL}/#person` }
              }))
            }
          ]),
      {
        '@type': 'FAQPage',
        mainEntity: faqsForSchema.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };
}

