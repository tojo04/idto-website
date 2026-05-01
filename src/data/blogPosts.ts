export interface BlogPostCta {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  excerpt: string;
  content: string;
  cta?: BlogPostCta;
}

export const blogPosts: BlogPost[] = [
  {
    id: "penny-drop-integration",
    slug: "penny-drop-integration",
    title: "Why Your Penny Drop Integration Is Costing You More Than You Think",
    description:
      "Inconsistent outputs, cryptic error codes, and silent failures are quietly burning engineering hours across India's lending stack. There's a better way.",
    category: "KYC Infrastructure \u00b7 Bank Verification",
    date: "April 2026",
    readTime: 8,
    author: "idto.ai",
    excerpt:
      "Inconsistent outputs, cryptic error codes, and silent failures are quietly burning engineering hours across India's lending stack.",
    content: `
      <div class="blog-hero-visual" aria-label="Penny drop integration pain points">
        <div class="blog-pain-grid">
          <div class="blog-pain-cell">
            <div class="blog-pain-number">30%</div>
            <div class="blog-pain-label">of bank verifications fail silently across raw provider APIs</div>
          </div>
          <div class="blog-pain-cell">
            <div class="blog-pain-number">6+</div>
            <div class="blog-pain-label">different error schemas across India's top KYC providers</div>
          </div>
          <div class="blog-pain-cell">
            <div class="blog-pain-number">Weeks</div>
            <div class="blog-pain-label">wasted debugging inconsistent penny drop responses</div>
          </div>
        </div>
      </div>

      <section>
        <h2>The hidden tax on every bank account verification</h2>
        <p>If you're building a lending product, a neo-bank, or any platform that onboards users in India, you've almost certainly implemented <strong>penny drop verification</strong> &mdash; the process of depositing &#8377;1 into a user's bank account to confirm that the account is real, active, and belongs to the person who claimed it.</p>
        <p>On paper, it's simple. In practice, it's one of the most quietly painful parts of the Indian KYC stack.</p>
        <p>The problem isn't the concept of penny drop. It's the fragmented ecosystem of service providers that power it &mdash; each with their own APIs, their own logic for when a transfer "succeeds," their own timeout behaviors, and their own entirely unique vocabulary for failure.</p>
      </section>

      <div class="blog-callout">
        <p>"Our backend engineer spent three days trying to figure out why the same IFSC code triggered a success on one provider and a 422 on another. Turned out to be a routing edge case &mdash; but the error code gave us nothing to work with."</p>
      </div>

      <section>
        <h2>What is penny drop verification, exactly?</h2>
        <p>Penny drop, also called <strong>bank account verification via micro-deposit</strong>, is a method used by lenders, fintechs, and financial platforms to validate a user's bank account details before disbursing funds or setting up mandates.</p>
        <p>Here's the basic flow: a small credit &mdash; typically &#8377;1 &mdash; is sent to the account number and IFSC provided by the user. If the transfer goes through successfully and the beneficiary name returned by the bank matches the user's KYC name, the account is considered verified. It's more reliable than a simple account number format check because it tests the <em>actual banking rails</em> &mdash; not just the structure of the data.</p>
        <p>Penny drop is used in:</p>
        <p><strong>Loan disbursement</strong> &mdash; to ensure the account receiving the loan belongs to the borrower. <strong>NACH mandate setup</strong> &mdash; to validate the repayment account before creating an eMandate. <strong>Payout flows</strong> &mdash; to pre-validate accounts before bulk disbursements. <strong>User onboarding</strong> &mdash; as a layer of financial identity confirmation alongside PAN and Aadhaar verification.</p>
      </section>

      <section>
        <h2>The real problem: provider chaos</h2>
        <p>India has a rich but fragmented KYC provider landscape. Karza, IDfy, Signzy, Perfios, Surepass, and dozens of smaller players all offer penny drop APIs. Each connects to similar underlying banking networks &mdash; but the similarity ends at the infrastructure layer.</p>
        <p>When it comes to <strong>what they return to you</strong>, things fall apart fast.</p>
      </section>

      <div class="blog-divider" aria-hidden="true"></div>

      <section>
        <h3>The error code problem</h3>
        <p>Consider the scenario where a bank account is valid but the name provided doesn't match the account holder's registered name. A simple, common case. Here's what different providers might return:</p>

        <div class="blog-compare-block">
          <div class="blog-compare-header">
            <div class="blog-compare-col-head">What raw providers return</div>
            <div class="blog-compare-col-head">What idto returns</div>
          </div>
          <div class="blog-compare-row">
            <div class="blog-compare-cell"><code>ERR_BENE_NAME_MISMATCH_104</code></div>
            <div class="blog-compare-cell">ACCOUNT_HOLDER_NAME_MISMATCH</div>
          </div>
          <div class="blog-compare-row">
            <div class="blog-compare-cell"><code>422 &mdash; invalid_beneficiary</code></div>
            <div class="blog-compare-cell">ACCOUNT_HOLDER_NAME_MISMATCH</div>
          </div>
          <div class="blog-compare-row">
            <div class="blog-compare-cell"><code>success: false, reason: null</code></div>
            <div class="blog-compare-cell">ACCOUNT_HOLDER_NAME_MISMATCH</div>
          </div>
          <div class="blog-compare-row">
            <div class="blog-compare-cell"><code>IMPS_FAILED / timeout</code></div>
            <div class="blog-compare-cell">PROVIDER_TIMEOUT &mdash; auto-retried</div>
          </div>
          <div class="blog-compare-row">
            <div class="blog-compare-cell"><code>200 OK, verified: false</code> (no reason)</div>
            <div class="blog-compare-cell">ACCOUNT_INACTIVE</div>
          </div>
        </div>

        <p>For the product team, this isn't just an aesthetic annoyance &mdash; it's a genuine operational problem. Each new provider integration requires engineers to <strong>re-learn an entirely new error taxonomy</strong>, write new mapping logic, re-test edge cases, and update downstream systems, like your risk rules or your user-facing error messages, to account for the new vocabulary.</p>
        <p>And if you're ever switching providers &mdash; or running them in parallel for redundancy &mdash; the problem compounds exponentially.</p>
      </section>

      <section>
        <h2>Why success rates vary so dramatically</h2>
        <p>Even beyond error codes, raw provider success rates for penny drop vary significantly &mdash; and not for obvious reasons. Bank connectivity windows, IMPS rail congestion, IFSC code database staleness, and provider-side retry logic all play a role.</p>
        <p>A provider that looks best-in-class in a benchmark test at 11am on a Tuesday may perform very differently during salary week, or when a specific private sector bank's IMPS gateway is under load. Most providers <strong>don't retry intelligently</strong>. They fire the request, get a timeout or a failure, and return it to you as a final response. Your engineering team then has to decide: is this a hard failure or a transient one? Was the account genuinely invalid, or did the rail just hiccup?</p>
        <p>Without deep insight into each provider's behavior patterns, this becomes a guessing game &mdash; one that costs you both real verification failures and unnecessary friction for valid users.</p>
      </section>

      <section>
        <h2>How idto.ai solves this</h2>
        <p>idto.ai is built on the premise that merchants and product teams <strong>shouldn't need to understand the internals of India's KYC provider market</strong> to build reliable verification flows.</p>
        <p>Instead of giving you a direct pipe to a single provider, idto operates as an intelligent orchestration layer &mdash; sitting between your product and the underlying providers, normalizing everything you see on your side of the fence.</p>

        <div class="blog-steps">
          <div class="blog-step">
            <div class="blog-step-num">1</div>
            <div class="blog-step-body">
              <strong>Intelligent provider routing</strong>
              <span>When a penny drop request comes in, idto evaluates current provider health, historical success rates for that bank/IFSC combination, and real-time rail status to route to the best available provider &mdash; not just a fixed default.</span>
            </div>
          </div>
          <div class="blog-step">
            <div class="blog-step-num">2</div>
            <div class="blog-step-body">
              <strong>Automatic fallback &amp; retry</strong>
              <span>If a provider returns a transient failure &mdash; timeout, rate limit, or infrastructure error &mdash; idto automatically retries with an alternate provider. Your API call gets a clean response. You never see the chaos underneath.</span>
            </div>
          </div>
          <div class="blog-step">
            <div class="blog-step-num">3</div>
            <div class="blog-step-body">
              <strong>Normalized response schema</strong>
              <span>Every verification result &mdash; success or failure &mdash; comes back in a single, consistent JSON schema. Same field names, same status codes, same error taxonomy. Regardless of which underlying provider actually ran the check.</span>
            </div>
          </div>
          <div class="blog-step">
            <div class="blog-step-num">4</div>
            <div class="blog-step-body">
              <strong>Human-readable, actionable error codes</strong>
              <span>idto's error codes are designed to be understood by engineers, product managers, and even customer support agents &mdash; not just the person who wrote the original integration. No more guessing what <code>ERR_104_BENE</code> means at 2am during an incident.</span>
            </div>
          </div>
          <div class="blog-step">
            <div class="blog-step-num">5</div>
            <div class="blog-step-body">
              <strong>Continuous provider benchmarking</strong>
              <span>idto monitors provider performance in real time across bank types, geographies, and time windows &mdash; and uses this data to continuously tune routing decisions. You get the benefit of this intelligence without needing a dedicated team to maintain it.</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>What this means for your team</h2>

        <div class="blog-benefits-grid">
          <div class="blog-benefit-card">
            <div class="blog-benefit-icon">01</div>
            <h3>Faster integration</h3>
            <p>One API. One schema. One error taxonomy. Integration that used to take days takes hours &mdash; and never needs rework when a provider changes their contract.</p>
          </div>
          <div class="blog-benefit-card">
            <div class="blog-benefit-icon">02</div>
            <h3>Higher success rates</h3>
            <p>Smart routing and automatic fallback mean fewer genuine verifications fail due to transient provider issues. Your funnel conversion goes up without changing a line of your logic.</p>
          </div>
          <div class="blog-benefit-card">
            <div class="blog-benefit-icon">03</div>
            <h3>Debuggable failures</h3>
            <p>When a verification fails, you know exactly why. Actionable error codes mean your support team can resolve borrower issues without escalating to engineering every time.</p>
          </div>
          <div class="blog-benefit-card">
            <div class="blog-benefit-icon">04</div>
            <h3>Provider independence</h3>
            <p>No more vendor lock-in. If a provider raises prices, degrades in quality, or goes offline, idto absorbs the switch. Your product sees nothing change.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>The bottom line</h2>
        <p>Penny drop is a commodity operation. The technology behind it &mdash; sending a rupee over IMPS &mdash; hasn't changed. What <em>has</em> changed is the expectation that engineering teams should spend weeks managing the inconsistencies of a fragmented provider market just to reliably answer the question: <strong>"Does this bank account belong to this person?"</strong></p>
        <p>That's not a competitive advantage anyone wants to build in-house. It's infrastructure &mdash; and infrastructure should be invisible.</p>
        <p>idto.ai exists to make bank verification invisible in the right way: <strong>reliably, consistently, and without requiring your team to become experts in the quirks of every KYC vendor in India.</strong></p>
        <p>If you're building a lending product, BNPL platform, or any application that touches user bank accounts, the question isn't whether to use penny drop &mdash; it's whether you want to own the chaos of raw provider integrations, or whether you want to get back to building your actual product.</p>
      </section>
    `,
    cta: {
      title: "Start verifying with idto.ai",
      description: "One integration. Best-in-class success rates. Zero provider chaos.",
      buttonLabel: "Explore idto Penny Drop \u2192",
      href: "/products/BAV",
    },
  },
  {
    id: "aadhaar-kyc-evolution",
    slug: "aadhaar-kyc-evolution",
    title: "From Aadhaar to DigiLocker: The Evolution of KYC in India",
    description:
      "Trace the journey of India's KYC infrastructure from centralized Aadhaar to decentralized digital lockers, and what it means for fintech integration.",
    category: "KYC Infrastructure \u00b7 Identity Verification",
    date: "March 2026",
    readTime: 9,
    author: "idto.ai",
    excerpt:
      "The Indian identity verification landscape has transformed dramatically. Understanding this shift is critical for building modern onboarding flows.",
    content: `
      <div class="aadhaar-map" aria-label="KYC evolution map">
        <div class="aadhaar-map-copy">
          <span class="aadhaar-kicker">Identity rails</span>
          <h2>The shift from collected documents to verified data</h2>
          <p>India's KYC stack has moved from collecting user-uploaded files to fetching source-backed data through consent-led journeys. Aadhaar created a common identity anchor. DigiLocker made issued documents easier to share. Modern onboarding needs both, plus intelligent fallback logic.</p>
        </div>
        <div class="aadhaar-map-rail">
          <div>
            <span>01</span>
            <strong>Paper KYC</strong>
            <p>Users upload or submit documents. Operations teams inspect images, fields, and exceptions.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Aadhaar</strong>
            <p>A common identity anchor makes digital verification faster, but not every journey can rely on one rail.</p>
          </div>
          <div>
            <span>03</span>
            <strong>DigiLocker</strong>
            <p>Users consent to share issued documents, reducing upload friction and improving data quality.</p>
          </div>
        </div>
      </div>

      <section>
        <h2>Why this evolution matters</h2>
        <p>For years, KYC in India was built around collecting documents from the user and then asking operations teams to decide whether those documents looked valid. A customer uploaded a PAN card, Aadhaar copy, bank statement, or address proof. Someone, or some OCR pipeline, checked whether the image was readable, whether the fields matched, and whether the document looked suspicious.</p>
        <p>That model worked when digital onboarding volumes were smaller. It does not scale well for fintechs, lenders, insurers, brokers, payroll platforms, marketplaces, and embedded finance products that need to verify users in minutes instead of days.</p>
        <p>The difference between upload-based KYC and source-backed KYC is not cosmetic. Every manual step creates drop-off, support tickets, rework, and compliance risk.</p>
      </section>

      <div class="aadhaar-principle">
        <span>Operating principle</span>
        <p>The best KYC experience is not the one with the most document uploads. It is the one that gets verified data from the right source with the least necessary user effort.</p>
      </div>

      <section>
        <h2>The pre-DigiLocker era</h2>
        <p>Before modern digital identity rails matured, KYC meant paper documents, manual verification, and repeated back-and-forth between customers and support teams. Every regulated business maintained its own document store, its own review queue, and its own interpretation of what counted as an acceptable proof.</p>
        <p>This created four persistent problems: users had to find and upload documents, low-quality images created rejection loops, operations teams had to review routine exceptions, and every business duplicated verification work that another institution may already have completed.</p>
      </section>

      <div class="aadhaar-era-strip">
        <div>
          <span>Before</span>
          <strong>Document collection</strong>
          <p>Onboarding depended on uploaded files, OCR quality, and manual interpretation.</p>
        </div>
        <div>
          <span>Middle layer</span>
          <strong>Aadhaar identity anchor</strong>
          <p>Digital identity checks became faster and more standardized, but still needed policy-aware flows.</p>
        </div>
        <div>
          <span>Now</span>
          <strong>DigiLocker source fetch</strong>
          <p>Issued documents can be shared through consent-led journeys with cleaner data and stronger traceability.</p>
        </div>
      </div>

      <section>
        <h2>What Aadhaar changed</h2>
        <p>Aadhaar introduced a common identity anchor that made it easier to verify that a person existed and could be associated with a unique identifier. For digital onboarding, this was a major shift. Instead of relying only on uploaded identity proofs, businesses could build flows that were faster, more standardized, and easier to automate.</p>
        <p>Aadhaar-linked verification helped reduce pure document dependency. It also made it easier to match identity attributes across PAN, bank account verification, CKYC, mobile intelligence, and other checks used in financial onboarding.</p>
        <p>But Aadhaar did not eliminate KYC complexity. It moved the industry forward while also forcing product teams to think more carefully about consent, data minimization, fallback journeys, and user experience.</p>
      </section>

      <section>
        <h2>Where Aadhaar-only flows hit limits</h2>
        <p>Aadhaar is powerful, but a modern KYC journey usually needs more than one identifier. A lender may need PAN validation, address proof, bank account ownership, employment signals, CKYC lookup, or document fetch. A broker may need a PAN-centered flow. An insurer may need address and age checks. A marketplace may need lightweight identity proofing plus bank verification for payouts.</p>
        <p>When product teams treat Aadhaar as the entire KYC stack, they often end up with brittle journeys. If the user cannot complete one step, the whole funnel stalls. If the data does not match exactly, support teams need to intervene. If a document is still required, users are sent back into upload-heavy flows.</p>
      </section>

      <div class="aadhaar-source-panel">
        <div>
          <span class="aadhaar-kicker">Source-backed KYC</span>
          <h2>Why DigiLocker changes the product architecture</h2>
          <p>DigiLocker turns KYC from a file-upload problem into a consent and orchestration problem. The product no longer has to guess what a cropped image contains. It can fetch issued documents, parse structured data, and route the user based on clear outcomes.</p>
        </div>
        <div class="aadhaar-signal-list">
          <div>
            <strong>Data quality</strong>
            <p>Issued documents reduce ambiguity compared with screenshots, scans, and manually cropped files.</p>
          </div>
          <div>
            <strong>User effort</strong>
            <p>Consent-led fetches can remove repeated upload, crop, and retry loops from onboarding.</p>
          </div>
          <div>
            <strong>Audit trail</strong>
            <p>Consent, fetch attempts, and returned data can be tracked as part of one verification journey.</p>
          </div>
        </div>
      </div>

      <section>
        <h2>Enter DigiLocker</h2>
        <p>DigiLocker changed the onboarding equation by giving users a consent-led way to share documents that are already issued to them. Instead of asking a user to upload files from their phone gallery, a product can guide them through a flow where documents are fetched from a source designed for digital sharing.</p>
        <p>For users, this reduces friction. For fintechs, it improves data quality. For compliance and operations teams, it creates a cleaner path to auditability because the journey is less dependent on screenshots, cropped PDFs, and manual interpretation.</p>
      </section>

      <div class="aadhaar-journey-board">
        <div class="aadhaar-journey-card">
          <span>Start</span>
          <strong>User enters onboarding</strong>
          <p>Collect only the minimum identifiers needed to choose the right verification path.</p>
        </div>
        <div class="aadhaar-journey-card">
          <span>Source</span>
          <strong>Try source-backed fetch</strong>
          <p>Use DigiLocker where the product needs issued documents and consent-backed sharing.</p>
        </div>
        <div class="aadhaar-journey-card">
          <span>Fallback</span>
          <strong>Route intelligently</strong>
          <p>If the user cannot complete the flow, move to CKYC, PAN, bank verification, or review.</p>
        </div>
        <div class="aadhaar-journey-card">
          <span>Output</span>
          <strong>Return one decision</strong>
          <p>Downstream systems should receive a normalized result, not a pile of provider-specific responses.</p>
        </div>
      </div>

      <section>
        <h2>The integration reality</h2>
        <p>Despite the promise, integrating DigiLocker is not automatically simple. Teams still have to design the consent flow, handle user drop-offs, parse returned data, store audit logs, manage retries, and decide what happens when a document is unavailable or the user cannot complete the flow.</p>
        <p>Most real-world products still need hybrid logic. A user may complete DigiLocker quickly. Another may need CKYC fallback. Another may require PAN-first onboarding. Another may need bank account verification before disbursal. The right flow depends on the customer segment, regulatory requirement, risk level, and business objective.</p>
        <p>The mistake is thinking about DigiLocker as a single API call. The better framing is <strong>DigiLocker orchestration</strong>: routing users through the cleanest compliant path while keeping fallback options available when the happy path breaks.</p>
      </section>

      <div class="aadhaar-stack">
        <div>
          <span>Layer 1</span>
          <strong>Identity anchor</strong>
          <p>Aadhaar, PAN, and CKYC help establish who the user is and what records already exist.</p>
        </div>
        <div>
          <span>Layer 2</span>
          <strong>Document source</strong>
          <p>DigiLocker fetches issued documents when the journey needs proof, not just an identifier.</p>
        </div>
        <div>
          <span>Layer 3</span>
          <strong>Financial verification</strong>
          <p>Bank account verification, penny drop, and related checks confirm payout or disbursal readiness.</p>
        </div>
        <div>
          <span>Layer 4</span>
          <strong>Decision layer</strong>
          <p>Risk rules, fallback logic, and normalized outputs turn raw checks into product decisions.</p>
        </div>
      </div>

      <section>
        <h2>How idto.ai helps teams modernize KYC</h2>
        <p>idto.ai is built for teams that want source-backed verification without building every identity workflow, fallback path, and provider integration from scratch. The goal is to make the KYC layer feel predictable to product and engineering teams, even when the underlying verification ecosystem is complex.</p>
        <p>With orchestration, product teams can start with the cleanest path, fall back when needed, normalize the data returned by each rail, and keep a clear audit trail across the whole journey.</p>
      </section>

      <div class="aadhaar-outcomes">
        <div>
          <strong>Lower drop-off</strong>
          <p>Users spend less time searching for files, cropping images, and retrying failed uploads.</p>
        </div>
        <div>
          <strong>Cleaner operations</strong>
          <p>Support and review teams handle fewer avoidable document-quality exceptions.</p>
        </div>
        <div>
          <strong>Flexible compliance</strong>
          <p>Teams can combine DigiLocker with PAN, CKYC, BAV, and review paths based on policy.</p>
        </div>
      </div>

      <section>
        <h2>What's next?</h2>
        <p>The next phase of KYC in India is not about replacing one document with another. It is about using consent-led, source-backed data flows to build verification journeys that are faster for users, clearer for operations teams, and easier for compliance teams to audit.</p>
        <p>Aadhaar helped standardize identity. DigiLocker helped make issued documents portable. CKYC, PAN, bank account verification, and risk intelligence add further context. The winning onboarding stacks will be the ones that combine these rails intelligently instead of treating each one as a disconnected vendor integration.</p>
        <p>For product teams, the practical question is simple: how much of your KYC flow still depends on the user uploading a file, and how much can be verified through a cleaner source-backed journey?</p>
      </section>
    `,
    cta: {
      title: "Build smoother DigiLocker journeys",
      description: "Move from upload-heavy KYC to consent-led document verification with idto.ai.",
      buttonLabel: "Explore DigiLocker 3.0 \u2192",
      href: "/products/digilocker-3.0",
    },
  },
  {
    id: "ckyc-vs-ekyc",
    slug: "ckyc-vs-ekyc",
    title: "CKYC vs eKYC: When to Use What in Your Verification Stack",
    description:
      "A practical guide to choosing between Centralized KYC and Electronic KYC based on your use case, regulatory requirements, and user experience goals.",
    category: "KYC Infrastructure \u00b7 Compliance",
    date: "January 2026",
    readTime: 10,
    author: "idto.ai",
    excerpt:
      "Both are valid paths to verification. The question is which aligns with your product, regulatory posture, and user base.",
    content: `
      <div class="ckyc-brief">
        <div>
          <span class="ckyc-kicker">Decision guide</span>
          <h2>CKYC and eKYC solve different onboarding problems</h2>
          <p>Most verification teams do not need to choose one forever. They need to decide which path should be primary, which path should be fallback, and which path should be reserved for higher-risk users.</p>
        </div>
        <div class="ckyc-brief-panel">
          <span>Best default</span>
          <strong>Use CKYC when a verified record already exists.</strong>
          <p>Use eKYC when you need a fresh verification event, updated consent capture, or a user has no retrievable CKYC record.</p>
        </div>
      </div>

      <section>
        <h2>The practical difference</h2>
        <p>CKYC and eKYC are often discussed as if they are interchangeable ways to "do KYC." In production onboarding flows, they behave very differently.</p>
        <p><strong>CKYC</strong> is a reuse rail. It helps a regulated entity retrieve an existing KYC record when the customer has already completed KYC elsewhere and that record can be found. <strong>eKYC</strong> is a fresh verification rail. It helps a business verify a user through a live digital journey, often when no reusable record is available or when a current verification event is required.</p>
        <p>The strongest onboarding stacks treat them as complementary paths. CKYC can remove friction for known users. eKYC can cover new users, stale records, edge cases, and journeys where fresh consent or document capture is required.</p>
      </section>

      <div class="ckyc-decision-grid">
        <div class="ckyc-decision-card">
          <span>Use CKYC when</span>
          <ul>
            <li>The user is likely to have an existing regulated KYC record.</li>
            <li>You want a lower-friction path for repeat financial customers.</li>
            <li>You need faster onboarding without asking the user to repeat document steps.</li>
            <li>Your workflow can accept data from a previously completed KYC record.</li>
          </ul>
        </div>
        <div class="ckyc-decision-card">
          <span>Use eKYC when</span>
          <ul>
            <li>The user may not have a retrievable CKYC record.</li>
            <li>You need a fresh identity verification event.</li>
            <li>You need current user participation, liveness, consent, or document capture.</li>
            <li>Your policy requires a newly completed KYC journey for this product.</li>
          </ul>
        </div>
      </div>

      <section>
        <h2>What is CKYC?</h2>
        <p>Centralized KYC, usually shortened to CKYC, is India's centralized KYC record framework. Once a customer's KYC is completed by a reporting entity and uploaded to the central registry, other eligible institutions can search and retrieve that record instead of asking the customer to complete the same process again.</p>
        <p>For product teams, the appeal is clear: CKYC can make onboarding feel almost invisible for users who already have a valid record. It can reduce document upload dependency, shorten onboarding time, and lower the operational burden of reviewing routine identity proofs.</p>
        <p>The limitation is equally important: CKYC depends on record availability and match quality. If the user does not have a record, if search identifiers are incomplete, or if the record does not meet your product's policy needs, the journey still needs a fallback.</p>
      </section>

      <section>
        <h2>What is eKYC?</h2>
        <p>Electronic KYC is a broad term for digital verification journeys completed directly with the user. Depending on the use case, it can involve Aadhaar-linked flows, DigiLocker document fetch, PAN verification, video KYC, face checks, or other digital identity steps.</p>
        <p>eKYC gives the business more control over the current verification event. The user actively participates, consent can be captured in the flow, and product-specific checks can be added based on risk level or regulatory need.</p>
        <p>The tradeoff is friction. Any active user journey introduces drop-off risk. More screens, more OTPs, more uploads, and more retries usually mean fewer completed applications.</p>
      </section>

      <div class="ckyc-pathways">
        <div class="ckyc-pathway">
          <span class="ckyc-pathway-label">Low friction path</span>
          <strong>CKYC first</strong>
          <p>Search the user through available identifiers. If a valid record is found, prefill or complete eligible KYC steps with minimal user effort.</p>
        </div>
        <div class="ckyc-pathway">
          <span class="ckyc-pathway-label">Fallback path</span>
          <strong>DigiLocker or eKYC</strong>
          <p>If CKYC is unavailable or insufficient, route the user into a live consent-led verification journey instead of blocking onboarding.</p>
        </div>
        <div class="ckyc-pathway">
          <span class="ckyc-pathway-label">Risk path</span>
          <strong>Enhanced checks</strong>
          <p>For higher-risk cases, add bank account verification, PAN checks, sanctions screening, or manual review depending on the policy.</p>
        </div>
      </div>

      <section>
        <h2>The tradeoffs that matter</h2>
        <p>The real CKYC vs eKYC decision is not philosophical. It is operational. A good product decision depends on four questions: how much friction can the journey tolerate, how current does the verification need to be, how much regulatory evidence is required, and what fallback exists when the first path fails?</p>
        <p>CKYC usually wins on speed and user effort when the record exists. eKYC usually wins on freshness and control when the user must complete a new verification. Neither wins in every context.</p>
      </section>

      <div class="ckyc-scoreboard">
        <div>
          <span>Friction</span>
          <strong>CKYC lower</strong>
          <p>Best when records are available and accepted by policy.</p>
        </div>
        <div>
          <span>Freshness</span>
          <strong>eKYC stronger</strong>
          <p>Best when the business needs a current user action.</p>
        </div>
        <div>
          <span>Coverage</span>
          <strong>Hybrid wins</strong>
          <p>Fallback logic prevents unnecessary dead ends.</p>
        </div>
        <div>
          <span>Operations</span>
          <strong>CKYC lighter</strong>
          <p>Less routine document handling when records match.</p>
        </div>
      </div>

      <section>
        <h2>Where teams get this wrong</h2>
        <p>The common mistake is building a single rigid path. A CKYC-only journey can fail for users with no retrievable record. An eKYC-only journey can create unnecessary friction for users who already have valid reusable records.</p>
        <p>The second mistake is treating fallback as an afterthought. If a user fails CKYC search, the product should already know the next best path. If a DigiLocker fetch fails, the product should know whether to retry, route to CKYC, request another document, or move the case into review.</p>
        <p>The third mistake is not normalizing the output. Risk, support, and operations teams should not need to understand every upstream provider response. They need a clean result: verified, needs fallback, needs review, or rejected with a clear reason.</p>
      </section>

      <div class="ckyc-rulebook">
        <h2>A simple routing rulebook</h2>
        <div class="ckyc-rule">
          <span>1</span>
          <p><strong>Try CKYC first</strong> when the segment is likely to have existing regulated financial relationships.</p>
        </div>
        <div class="ckyc-rule">
          <span>2</span>
          <p><strong>Use eKYC next</strong> when no reusable record is found or when the policy requires fresh verification.</p>
        </div>
        <div class="ckyc-rule">
          <span>3</span>
          <p><strong>Add risk checks</strong> only when the product, ticket size, or policy justifies the extra friction.</p>
        </div>
        <div class="ckyc-rule">
          <span>4</span>
          <p><strong>Keep the response normalized</strong> so downstream systems can make decisions without provider-specific logic.</p>
        </div>
      </div>

      <section>
        <h2>Best practices</h2>
        <p>Most successful platforms use both: CKYC as the fast path for eligible users, and eKYC as the fallback or enhanced path for new, unmatched, or higher-risk users.</p>
        <p>Start by segmenting the onboarding journey. A low-risk repeat customer should not face the same workflow as a new borrower with thin history. A high-value transaction may justify additional checks that would be excessive for a low-risk account update.</p>
        <p>The goal is not to maximize checks. The goal is to collect the right evidence with the least necessary user effort.</p>
      </section>

      <section>
        <h2>How idto.ai fits in</h2>
        <p>idto.ai helps teams build this kind of layered verification stack without wiring every path manually. CKYC, DigiLocker, PAN, bank account verification, and other checks can be composed into a journey that adapts to the user and the policy requirement.</p>
        <p>That means product teams can design onboarding around outcomes instead of vendors: retrieve an existing record when possible, verify freshly when needed, route intelligently on failure, and return consistent results to downstream systems.</p>
      </section>
    `,
    cta: {
      title: "Build a smarter CKYC flow",
      description: "Use CKYC, eKYC, and fallback journeys together instead of forcing every user through one rigid path.",
      buttonLabel: "Explore CKYC \u2192",
      href: "/products/CKYC",
    },
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
