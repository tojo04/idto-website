import { Link, useParams } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import Button from "../components/UI/Button";
import { getBlogPostBySlug, type BlogPostCta } from "../data/blogPosts";

const defaultCta: BlogPostCta = {
  title: "Ready to streamline your KYC?",
  description: "Explore how idto.ai can simplify your verification stack.",
  buttonLabel: "Book a Demo \u2192",
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-bg font-body text-dark">
        <Header />
        <main className="max-w-[1100px] mx-auto px-5 py-24 text-center">
          <h1 className="font-heading text-[48px] text-[#0f1117]">Post not found</h1>
          <p className="mt-4 text-[#52525b]">
            <Link to="/blog" className="text-[#1d4ed8] hover:underline">
              {"\u2190"} Back to blog
            </Link>
          </p>
        </main>
        <FooterSection bookDemo={bookDemo} />
      </div>
    );
  }

  const cta = post.cta || defaultCta;

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title={`${post.title} | idto.ai`}
        description={post.description}
        path={`/blog/${post.slug}`}
      />
      <Header />

      <main className="max-w-275 mx-auto px-5 pb-32 pt-24">
        <section className="mx-auto max-w-195">
          <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
            {post.category}
          </span>
          <h1 className="mt-6 font-heading text-[30px] font-normal lg:text-[56px] leading-[1.03] tracking-tight text-[#0f1117]">
            {post.title}
          </h1>
          <p className="mt-6 text-[18px] leading-[1.8] text-[#52525b]">
            {post.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 border-t border-[#e5e7eb] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#1d4ed8] to-[#4f46e5] text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
                {post.author.substring(0, 2).toUpperCase()}
              </div>
              <div className="text-sm text-[#52525b]">
                <p className="font-semibold text-[#111827]">{post.author}</p>
                <p>
                  Published {"\u00b7"} {post.date} {"\u00b7"} {post.readTime} min read
                </p>
              </div>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#0f1117] transition hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
            >
              {"\u2190"} Back to blog list
            </Link>
          </div>
        </section>

        <article className="blog-post-content mx-auto mt-14 max-w-195">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="blog-post-content-inner"
          />

          <div className="blog-post-cta mx-auto mt-14 max-w-170 rounded-3xl bg-[#0f1117] p-8 text-center text-white sm:p-12">
            <h2 className="font-heading text-[20px] font-normal lg:text-[42px] leading-[1.3] tracking-tight">{cta.title}</h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/70">
              {cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              {cta.href ? (
                cta.href.startsWith("/") ? (
                  <Link
                    to={cta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white px-[27px] py-[13.5px] text-[16px] font-semibold tracking-tight text-primary transition-all duration-200 hover:bg-gray-50"
                  >
                    {cta.buttonLabel}
                  </Link>
                ) : (
                  <a
                    href={cta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white px-[27px] py-[13.5px] text-[16px] font-semibold tracking-tight text-primary transition-all duration-200 hover:bg-gray-50"
                  >
                    {cta.buttonLabel}
                  </a>
                )
              ) : (
                <Button
                  title={cta.buttonLabel}
                  onClick={bookDemo}
                  variant="white"
                  className="rounded-full"
                />
              )}
            </div>
          </div>
        </article>
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
