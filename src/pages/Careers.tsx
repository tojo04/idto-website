import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Globe2,
  Handshake,
  MapPin,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import FooterSection from "../components/LandingPage/FooterSection";
import Header from "../components/LandingPage/Header";
import SEOHead from "../components/SEOHead";
import { fadeItem, staggerContainer, viewportOnce } from "../utils/animations";

const careersEmail = "careers@idto.ai";

type Role = {
  title: string;
  team: string;
  location: string;
  experience: string;
  icon: typeof Code2;
  intro: string[];
  responsibilities: string[];
  requirements: string[];
  bonus: string[];
  reasons: string[];
};

const roles: Role[] = [
  {
    title: "Engineering Lead (Full Stack)",
    team: "Engineering",
    location: "Remote",
    experience: "5–12 years",
    icon: Code2,
    intro: [
      "We're looking for a hands-on Tech Lead who can help build the identity infrastructure layer for the digital economy.",
      "You'll lead the architecture, development, scalability, security, and performance of our platform while working closely with product, design, and business teams.",
    ],
    responsibilities: [
      "Own the overall technical architecture of the platform.",
      "Lead frontend and backend development efforts.",
      "Design scalable APIs, workflow engines, integrations, and platform services.",
      "Build highly reliable, secure, and performant systems.",
      "Review code, mentor engineers, and establish engineering best practices.",
      "Improve system performance, observability, reliability, and developer productivity.",
      "Drive engineering culture and technical excellence.",
    ],
    requirements: [
      "5+ years of software engineering experience.",
      "Strong expertise in modern frontend and backend technologies.",
      "Experience building SaaS platforms and APIs at scale.",
      "Deep understanding of system design, architecture, and security.",
      "Strong problem-solving and debugging skills.",
      "Ability to balance speed with quality and a strong ownership mindset.",
    ],
    bonus: [
      "Experience in identity, KYC, fraud, compliance, fintech, or payments.",
      "Experience building workflow engines or orchestration platforms.",
      "Startup experience from Seed to Series A/B environments.",
      "Open-source contributions.",
    ],
    reasons: [
      "Build products used by businesses across multiple countries.",
      "Solve complex identity and infrastructure challenges.",
      "Work directly with founders and define our future engineering culture.",
    ],
  },
  {
    title: "Enterprise Sales Manager",
    team: "Sales",
    location: "Remote / Bengaluru / Delhi NCR / Mumbai",
    experience: "4–10 years",
    icon: BriefcaseBusiness,
    intro: [
      "We're looking for a high-performing Enterprise Sales Manager to help build the next generation of identity infrastructure.",
      "This isn't a traditional sales role. You'll think like a founder, build relationships with CXOs, identify market opportunities, and help shape our GTM strategy.",
    ],
    responsibilities: [
      "Own the complete enterprise sales cycle from prospecting to closure.",
      "Build relationships with CXOs, founders, product leaders, risk teams, and compliance stakeholders.",
      "Drive adoption of IDto's identity verification, onboarding, KYB, fraud, and workflow products.",
      "Generate and manage a healthy pipeline of enterprise opportunities.",
      "Work closely with product, partnerships, and customer success teams.",
      "Contribute to GTM strategy, pricing, positioning, and market expansion.",
      "Consistently achieve and exceed revenue targets.",
    ],
    requirements: [
      "4+ years of B2B SaaS, fintech, payments, compliance, fraud, or identity sales experience.",
      "Strong experience selling to enterprise customers.",
      "A proven track record of achieving sales targets.",
      "Excellent communication, negotiation, and presentation skills.",
      "Ability to work independently in a fast-paced startup environment.",
      "Strong ownership mindset and customer-first approach.",
    ],
    bonus: [
      "Experience in KYC, KYB, fraud, payments, risk, lending, banking, or compliance products.",
      "Existing relationships within fintech, BFSI, marketplaces, or SaaS companies.",
      "Experience working in an early-stage startup.",
    ],
    reasons: [
      "Direct exposure to founders and leadership.",
      "Competitive compensation with performance incentives.",
      "Help shape a category-defining company and the future of digital identity.",
    ],
  },
  {
    title: "Partnerships Manager",
    team: "Partnerships",
    location: "Remote / Bengaluru / Delhi NCR",
    experience: "3–8 years",
    icon: Handshake,
    intro: [
      "Partnerships are at the core of our business. We're looking for a Partnerships Manager to build and manage relationships across the identity ecosystem.",
      "You'll play a critical role in expanding our ecosystem and helping us become the default identity infrastructure platform across emerging markets.",
    ],
    responsibilities: [
      "Identify, onboard, and manage strategic partners.",
      "Build relationships with KYC, KYB, AML, fraud, and verification providers.",
      "Negotiate commercials, contracts, and partnership agreements.",
      "Manage partner performance, pricing, SLAs, and escalations.",
      "Identify co-selling and go-to-market opportunities.",
      "Collaborate with product and engineering teams for partner integrations.",
      "Drive ecosystem growth across India, Southeast Asia, and the Middle East.",
    ],
    requirements: [
      "3+ years of partnerships, alliances, business development, or ecosystem management experience.",
      "Strong relationship-building and negotiation skills.",
      "Ability to work cross-functionally with business, product, and engineering teams.",
      "Excellent communication and stakeholder management skills.",
      "Strong ownership and execution mindset.",
      "Comfort working in a startup environment.",
    ],
    bonus: [
      "Experience in fintech, payments, identity, compliance, fraud, or SaaS.",
      "Existing relationships with verification providers, banks, fintechs, or ecosystem players.",
      "Experience managing technology partnerships and integrations.",
    ],
    reasons: [
      "Build one of the largest identity ecosystems in emerging markets.",
      "Own strategic partnerships that directly impact company growth.",
      "Work directly with founders with high visibility and growth opportunities.",
    ],
  },
];

const values = [
  ["01", "Honesty over perfection", "Trust starts with telling the truth early—especially when something goes wrong."],
  ["02", "Extreme ownership", "See a problem, propose a solution, and stay with it until the outcome is real."],
  ["03", "Customer obsession", "Understand the problem before proposing the solution. When customers win, we win."],
  ["04", "Bias for action", "Test, learn, and move. Speed creates learning, and learning creates progress."],
  ["05", "Radical transparency", "Context and feedback flow freely. The best idea wins, regardless of title."],
  ["06", "One team, one mission", "No silos and no passing the buck. We help each other build for the long term."],
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-black/65 sm:text-[15px]">
          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const Icon = role.icon;
  const applyHref = `mailto:${careersEmail}?subject=${encodeURIComponent(`Application — ${role.title}`)}`;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-dark/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-labelledby="role-title"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        className="max-h-[92vh] w-full max-w-[920px] overflow-y-auto rounded-t-[32px] bg-white sm:rounded-[32px]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-border bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[13px] font-semibold text-black/50">{role.team}</span>
          </div>
          <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-bg text-dark transition hover:bg-gray-border" aria-label="Close job details">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 sm:p-10">
          <h2 id="role-title" className="max-w-[700px] font-heading text-[34px] leading-[1.1] tracking-tight text-dark sm:text-[48px]">{role.title}</h2>
          <div className="mt-5 flex flex-wrap gap-2 text-[13px] text-black/60">
            <span className="rounded-full bg-gray-bg px-3 py-2">{role.location}</span>
            <span className="rounded-full bg-gray-bg px-3 py-2">{role.experience}</span>
          </div>
          <div className="mt-8 space-y-4 text-[16px] leading-[1.75] text-black/65">
            {role.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <section><h3 className="font-heading text-[24px] text-dark">What you'll do</h3><BulletList items={role.responsibilities} /></section>
            <section><h3 className="font-heading text-[24px] text-dark">What we're looking for</h3><BulletList items={role.requirements} /></section>
            <section><h3 className="font-heading text-[24px] text-dark">Bonus points</h3><BulletList items={role.bonus} /></section>
            <section><h3 className="font-heading text-[24px] text-dark">Why join IDto?</h3><BulletList items={role.reasons} /></section>
          </div>
          <div className="mt-10 rounded-[24px] bg-blue-section p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div>
              <p className="font-heading text-[24px]">Sound like you?</p>
              <p className="mt-1 text-[14px] text-white/65">Send us your CV and a short note about why this role fits.</p>
            </div>
            <a href={applyHref} className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-primary transition hover:bg-green sm:mt-0">
              Apply for this role <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const bookDemo = () => window.dispatchEvent(new Event("idto:open-demo-request-modal"));

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead title="Careers at IDto | Build the Future of Identity" description="Join IDto and help build unified identity infrastructure for digital businesses across emerging markets. Explore our open roles." path="/careers" />
      <Header />
      <main>
        <section className="relative overflow-hidden rounded-b-[40px] bg-white px-5 pb-16 pt-14 lg:rounded-b-[96px] lg:px-12 lg:pb-[104px] lg:pt-[92px]">
          <div className="pointer-events-none absolute -right-24 top-5 h-[420px] w-[420px] rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-4 top-24 h-[260px] w-[260px] rounded-full border border-primary/10" />
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="relative mx-auto max-w-[1215px]">
            <motion.p variants={fadeItem} className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">Careers at IDto</motion.p>
            <motion.h1 variants={fadeItem} className="mt-6 max-w-[900px] font-heading text-[40px] leading-[1.06] tracking-[-1px] text-dark sm:text-[60px] lg:text-[78px] lg:tracking-[-2px]">
              Build the identity infrastructure for the digital economy.
            </motion.h1>
            <motion.div variants={fadeItem} className="mt-8 grid max-w-[1020px] gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-[720px] text-[16px] leading-[1.75] text-black/60 lg:text-[18px]">
                We’re making identity work like payments: simple, scalable, and accessible through one integration. Join us in helping businesses verify, onboard, and trust users anywhere in the world.
              </p>
              <a href="#open-roles" className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition hover:bg-primary-dark">
                See open roles <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
            <motion.div variants={fadeItem} className="mt-14 grid overflow-hidden rounded-[28px] border border-gray-border bg-gray-bg sm:grid-cols-3">
              {[
                [Globe2, "Global ambition", "India first. Southeast Asia and the Middle East next."],
                [Sparkles, "Day-one impact", "Real ownership of products, customers, and outcomes."],
                [Users, "Founder mindset", "High ownership, low ego, and merit over hierarchy."],
              ].map(([Icon, title, copy], index) => {
                const ItemIcon = Icon as typeof Globe2;
                return (
                  <div key={title as string} className={`p-6 lg:p-8 ${index < 2 ? "border-b border-gray-border sm:border-b-0 sm:border-r" : ""}`}>
                    <ItemIcon className="h-5 w-5 text-primary" />
                    <p className="mt-5 font-semibold text-dark">{title as string}</p>
                    <p className="mt-2 text-[13px] leading-[1.6] text-black/55">{copy as string}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        <section className="px-5 py-16 lg:px-12 lg:py-[112px]">
          <div className="mx-auto grid max-w-[1215px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">Why we exist</p>
              <h2 className="mt-4 font-heading text-[34px] leading-[1.12] tracking-tight md:text-[48px]">Identity is broken. We’re here to make it infrastructure.</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="space-y-5 text-[16px] leading-[1.8] text-black/60 lg:text-[18px]">
              <p>Every business is forced to stitch together providers, APIs, workflows, compliance requirements, and fraud tools just to onboard and verify users. What should take days often takes months.</p>
              <p>We believe businesses shouldn’t have to build and manage their own identity stack. Our vision is simple: <strong className="font-semibold text-dark">one integration, unified identity infrastructure, built to scale globally.</strong></p>
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 lg:px-12 lg:py-[112px]">
          <div className="mx-auto max-w-[1215px]">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
              <h2 className="mt-4 font-heading text-[34px] leading-[1.12] tracking-tight md:text-[48px]">A team of builders, not task executors.</h2>
              <p className="mt-5 text-[16px] leading-[1.75] text-black/60">We move fast, communicate openly, and trust talented people with the context and authority to make decisions.</p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="mt-12 grid border-l border-t border-gray-border sm:grid-cols-2 lg:grid-cols-3">
              {values.map(([number, title, copy]) => (
                <motion.article key={title} variants={fadeItem} className="min-h-[245px] border-b border-r border-gray-border p-6 transition-colors hover:bg-gray-bg lg:p-8">
                  <span className="text-[12px] font-semibold text-primary">{number}</span>
                  <h3 className="mt-10 font-heading text-[24px] leading-[1.2] text-dark">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-black/55">{copy}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="open-roles" className="scroll-mt-24 px-5 py-16 lg:px-12 lg:py-[112px]">
          <div className="mx-auto max-w-[1215px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">Open roles</p>
                <h2 className="mt-4 font-heading text-[34px] leading-[1.12] tracking-tight md:text-[48px]">Come build with us.</h2>
              </div>
              <p className="text-[14px] text-black/55">3 roles open · Remote-friendly</p>
            </div>
            <div className="mt-10 overflow-hidden rounded-[28px] border border-gray-border bg-white">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button key={role.title} onClick={() => setSelectedRole(role)} className="group grid w-full gap-5 border-b border-gray-border p-6 text-left transition-colors last:border-b-0 hover:bg-primary/[0.025] sm:grid-cols-[52px_1fr_auto] sm:items-center lg:p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary"><Icon className="h-5 w-5" /></span>
                    <span>
                      <span className="block font-heading text-[23px] leading-[1.2] text-dark lg:text-[28px]">{role.title}</span>
                      <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-black/50">
                        <span>{role.team}</span><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{role.location}</span><span>{role.experience}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-[14px] font-semibold text-primary">View role <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-5 rounded-[28px] bg-dark p-7 text-white sm:flex-row sm:items-center sm:justify-between lg:p-10">
              <div>
                <p className="font-heading text-[25px]">Don’t see your role?</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/60">We’re always interested in thoughtful builders. Tell us what you’re exceptional at.</p>
              </div>
              <a href={`mailto:${careersEmail}?subject=General%20application%20at%20IDto`} className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-dark transition hover:bg-green">Introduce yourself <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 lg:px-12 lg:pb-[112px]">
          <div className="mx-auto grid max-w-[1215px] overflow-hidden rounded-[40px] bg-blue-section text-white lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 lg:p-14">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-green">Who thrives here</p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[34px] leading-[1.12] md:text-[46px]">For people excited by uncertainty, growth, and meaningful work.</h2>
            </div>
            <div className="border-t border-white/15 p-8 lg:border-l lg:border-t-0 lg:p-14">
              {["You love solving difficult problems.", "You prefer ownership over supervision.", "You move quickly and embrace change.", "You communicate openly and honestly.", "You care deeply about customers and teammates."].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/15 py-4 first:pt-0 last:border-0 last:pb-0">
                  <Check className="h-4 w-4 shrink-0 text-green" /><span className="text-[15px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection bookDemo={bookDemo} />
      <AnimatePresence>{selectedRole && <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />}</AnimatePresence>
    </div>
  );
}
