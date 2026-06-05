import ContactFormCard from "./ContactFormCard";
import ContactIntro from "./ContactIntro";

export default function HeroSection() {
  return (
    <section className="px-5 pt-12 pb-12 sm:px-8 sm:pt-14 min-[1024px]:px-10 min-[1024px]:pt-16 lg:pb-18 xl:px-[112.5px]">
      <div className="mx-auto grid max-w-[1215px] gap-7 sm:gap-8 min-[1024px]:grid-cols-[minmax(320px,0.78fr)_minmax(560px,1fr)] min-[1024px]:items-start">
        <ContactIntro />
        <ContactFormCard />
      </div>
    </section>
  );
}
