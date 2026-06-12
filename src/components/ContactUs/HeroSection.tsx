import { useState } from "react";
import ContactFormCard from "./ContactFormCard";
import ContactIntro from "./ContactIntro";

const contactRoutes = [
  {
    title: "For Sales Enquiries:",
    email: "sales@idto.ai",
    description: "for sales enquiries",
  },
  {
    title: "For Support:",
    email: "tech@idto.ai",
    description: "for support",
  },
 
];

export default function HeroSection() {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);

  return (
    <section className="bg-white px-5 pt-10 pb-14 sm:px-8 sm:pt-12 min-[1024px]:px-10 lg:pb-20 xl:px-[112.5px]">
      <div className="mx-auto max-w-[1365px]">
        <ContactIntro showDescription={!hasSubmittedForm} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(520px,0.95fr)_minmax(360px,0.9fr)] lg:gap-16 xl:gap-24">
          <ContactFormCard
            onReset={() => setHasSubmittedForm(false)}
            onSubmitSuccess={() => setHasSubmittedForm(true)}
          />

          <aside className="grid content-start gap-10 pt-1 sm:grid-cols-2 lg:grid-cols-1">
            {contactRoutes.map((route) => (
              <section key={route.email}>
                <h2 className="text-[18px] font-bold leading-[1.25] text-black sm:text-[20px]">
                  {route.title}
                </h2>
                <a
                  href={`mailto:${route.email}`}
                  className="mt-1 block text-[17px] leading-[1.35] text-black transition hover:text-primary sm:text-[19px]"
                  aria-label={`${route.email} ${route.description}`}
                >
                  {route.email}
                </a>
              </section>
            ))}

            <section className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-[18px] font-bold leading-[1.25] text-black sm:text-[20px]">
                Official Address:
              </h2>
              <p className="mt-1 max-w-[440px] text-[17px] leading-[1.5] text-black sm:text-[19px]">
                3rd Floor, Orchid Centre, Golf Course Road, Sector 53,
                Gurugram, Haryana, India - 122002.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
