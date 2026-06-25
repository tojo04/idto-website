import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import FooterSection from "../components/LandingPage/FooterSection";
import Header from "../components/LandingPage/Header";
import SEOHead from "../components/SEOHead";
import {
  createFadeInUp,
  fadeItem,
  staggerContainer,
  viewportOnce,
} from "../utils/animations";

const careersEmail = "careers@idto.ai";

const principles = [
  {
    icon: BrainCircuit,
    title: "Solve meaningful problems",
    description:
      "Work on identity, onboarding, fraud, and trust infrastructure used in high-stakes customer journeys.",
  },
  {
    icon: Blocks,
    title: "Build with ownership",
    description:
      "Take ideas from first principles to production and stay close to the outcomes your work creates.",
  },
  {
    icon: Users,
    title: "Learn in the open",
    description:
      "Share context early, ask direct questions, and make the whole team sharper through honest collaboration.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "High-impact work",
    description:
      "Small teams, clear ownership, and the space to shape products that customers rely on every day.",
  },
  {
    icon: HeartHandshake,
    title: "Thoughtful collaboration",
    description:
      "A low-ego environment where strong opinions and genuine curiosity can comfortably coexist.",
  },
  {
    icon: BrainCircuit,
    title: "Room to grow",
    description:
      "Learn across product, engineering, operations, compliance, and the rapidly evolving identity ecosystem.",
  },
];

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-b-[40px] bg-white px-5 pb-14 pt-12 lg:rounded-b-[112px] lg:px-12 lg:pb-[112px] lg:pt-[96px]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="mx-auto flex max-w-[1215px] flex-col items-center text-center"
      >
        <motion.span
          variants={fadeItem}
          className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Careers at idto
        </motion.span>
        <motion.h1
          variants={fadeItem}
          className="mt-6 max-w-[850px] font-heading text-[32px] leading-[1.12] tracking-[-0.6px] text-black md:text-[52px] lg:text-[64px] lg:tracking-[-1.2px]"
        >
          Build the trust layer for the next generation of digital businesses.
        </motion.h1>
        <motion.p
          variants={fadeItem}
          className="mt-6 max-w-[680px] text-[15px] leading-[1.7] text-black/60 lg:text-[18px]"
        >
          Join a team making identity verification simpler, more reliable, and
          easier to build into every customer journey.
        </motion.p>
        <motion.a
          variants={fadeItem}
          href="#open-positions"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border-[1.125px] border-white/50 bg-primary px-[27px] text-[16px] font-semibold tracking-tight text-white transition-colors hover:bg-primary-dark"
        >
          View open positions
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>

        <motion.div
          variants={fadeItem}
          className="mt-12 grid w-full max-w-[1040px] gap-3 sm:grid-cols-3 lg:mt-16"
        >
          {["Curious by default", "Built with ownership", "Focused on impact"].map(
            (label, index) => (
              <div
                key={label}
                className="rounded-[24px] border border-gray-border bg-gray-bg px-5 py-6 text-left"
              >
                <span className="text-[12px] font-semibold text-primary">
                  0{index + 1}
                </span>
                <p className="mt-3 font-heading text-[22px] leading-[1.25] text-dark">
                  {label}
                </p>
              </div>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <section className="px-5 py-16 lg:px-12 lg:py-[112px]">
      <div className="mx-auto max-w-[1215px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="mx-auto max-w-[700px] text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Why join us
          </p>
          <h2 className="mt-4 font-heading text-[28px] leading-[1.2] tracking-tight text-black md:text-[42px]">
            Do ambitious work with people who care about the details.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-black/60 lg:text-[17px]">
            We are building foundational infrastructure in a complex space. That
            calls for craft, speed, good judgment, and teammates who enjoy
            figuring things out together.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14"
        >
          {principles.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={fadeItem}
              className="rounded-[32px] border border-gray-border bg-white p-7 shadow-[0_18px_60px_rgba(13,20,40,0.04)] lg:p-9"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-7 font-heading text-[24px] leading-[1.25] text-dark">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/60">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LifeAtIdtoSection() {
  return (
    <section className="px-5 pb-16 lg:px-12 lg:pb-[112px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp()}
        className="mx-auto grid max-w-[1215px] gap-10 overflow-hidden rounded-[40px] bg-blue-section px-7 py-10 text-white md:grid-cols-[0.85fr_1.15fr] md:items-center lg:rounded-[56px] lg:px-16 lg:py-20"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Life at idto
          </p>
          <h2 className="mt-4 font-heading text-[28px] leading-[1.2] tracking-tight md:text-[42px]">
            A team designed for trust, clarity, and momentum.
          </h2>
          <p className="mt-5 max-w-[500px] text-[15px] leading-[1.7] text-white/70 lg:text-[17px]">
            We value direct communication, deep work, and practical decisions.
            Everyone is encouraged to understand the customer, challenge
            assumptions, and improve how we build.
          </p>
          <div className="mt-7 flex items-center gap-2 text-[14px] text-white/80">
            <MapPin className="h-4 w-4 text-green" aria-hidden="true" />
            Gurugram, Haryana
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm last:sm:col-span-2"
            >
              <Icon className="h-6 w-6 text-green" aria-hidden="true" />
              <h3 className="mt-5 text-[17px] font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-white/65">
                {description}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function OpenPositionsSection() {
  return (
    <section
      id="open-positions"
      className="scroll-mt-28 bg-white px-5 py-16 lg:px-12 lg:py-[112px]"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp()}
        className="mx-auto max-w-[1000px]"
      >
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Open positions
          </p>
          <h2 className="mt-4 font-heading text-[28px] leading-[1.2] tracking-tight text-black md:text-[42px]">
            Find your place at idto.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.7] text-black/60 lg:text-[17px]">
            We do not have a published opening right now, but we are always
            interested in meeting thoughtful people who care about building
            reliable products.
          </p>
        </div>

        <div className="mt-10 rounded-[32px] border border-gray-border bg-gray-bg p-7 md:flex md:items-center md:justify-between md:gap-8 lg:p-10">
          <div>
            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-primary">
              General application
            </span>
            <h3 className="mt-5 font-heading text-[24px] leading-[1.25] text-dark lg:text-[30px]">
              Think you would be a great fit?
            </h3>
            <p className="mt-3 max-w-[580px] text-[15px] leading-[1.7] text-black/60">
              Tell us what you are excellent at, what you want to work on, and
              include links that help us understand your work.
            </p>
          </div>
          <a
            href={`mailto:${careersEmail}?subject=Careers%20at%20idto`}
            className="mt-6 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border-[1.125px] border-white/50 bg-primary px-[27px] text-[16px] font-semibold tracking-tight text-white transition-colors hover:bg-primary-dark md:mt-0"
          >
            Email your profile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function Careers() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Careers at idto.ai | Build Identity Infrastructure"
        description="Explore careers at idto.ai and help build reliable identity verification, onboarding, fraud prevention, and trust infrastructure."
        path="/careers"
      />
      <Header />
      <main>
        <HeroSection />
        <WhyJoinSection />
        <LifeAtIdtoSection />
        <OpenPositionsSection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
