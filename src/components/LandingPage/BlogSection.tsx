import { motion } from "framer-motion";
import { createFadeInUp, staggerContainer, fadeItem, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import blogPost1Image from "../../assets/blog_post_1.jpg";
import blogPost2Image from "../../assets/blog_post_2.png";
import blogPost3Image from "../../assets/blog_post_3.png";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Business Verification Done Right.",
    description:
      "#Business #verification process is br…",
    image: blogPost1Image,
    link: "https://in.linkedin.com/company/idto",
  },
  {
    title: "Cross-Border ≠ One Country",
    description: "#Crossborder onboarding sounds simple 🌍  …",
    image: blogPost2Image,
    link: "https://in.linkedin.com/company/idto",
  },
  {
    title: "Dashboard v2 live",
    description: "#LaunchAlert 🚀\nDashboard v2 is live.🙏  …",
    image: blogPost3Image,
    link: "https://in.linkedin.com/company/idto",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-6 lg:px-37.5 py-20 lg:py-37.5 rounded-[40px] lg:rounded-[150px]">
      <div className="max-w-405 mx-auto flex flex-col gap-16 lg:gap-22.5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading align="center">
            Our Recent <span className="text-primary">Social Post</span>
          </SectionHeading>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              variants={fadeItem}
              className="bg-white border-[1.5px] border-black/10 rounded-3xl overflow-hidden flex flex-col group hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#fbf8f9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                <h3 className="font-heading text-xl lg:text-2xl text-[#212529] leading-[1.3] tracking-tight">
                  {post.title}
                </h3>
                <p className="text-base text-[#495057] leading-normal">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-base font-medium text-[#212529] hover:text-primary transition-colors pt-4"
                >
                  Read more
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
