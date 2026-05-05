import { Link } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Blog | idto.ai"
        description="Insights from India's KYC infrastructure experts. Explore posts on penny drop verification, identity systems, and modern fintech integration."
        path="/blog"
      />
      <Header />

      <main className="max-w-[1100px] mx-auto px-5 py-16 lg:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
            idto | Academy
          </span>
          <h1 className="mt-6 font-heading text-[20px] font-normal lg:text-[42px] leading-[1.3] tracking-tight text-[#0f1117]">
            Ideas, product updates, and operational thinking from idto.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.8] text-[#52525b]">
            Explore our latest thinking on KYC infrastructure, identity verification, and building reliable fintech products in India.
          </p>
        </section>

        <section className="mt-14 grid gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block rounded-[32px] border border-[#e5e7eb] bg-white p-8 shadow-[0_18px_60px_rgba(15,17,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,17,23,0.08)]"
            >
              <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
                {post.category}
              </span>
              <h2 className="mt-5 font-heading text-[28px] font-normal lg:text-[34px] leading-[1.1] text-[#0f1117]">
                {post.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-[#52525b]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-[#6b7280]">
                <span className="font-semibold text-[#111827]">{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
