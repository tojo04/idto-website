import { DemoRequestForm } from "../DemoRequestModal";

export const CONTACT_DEMO_FORM_ID = "contact-demo-form";

export default function ContactFormCard() {
  return (
    <div
      id={CONTACT_DEMO_FORM_ID}
      className="w-full max-w-[760px] rounded-[22px] border border-black/10 bg-white p-5 text-dark shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-7 min-[1024px]:max-w-none lg:rounded-[28px] xl:p-12"
    >
      <DemoRequestForm idPrefix="contact-demo-request" />
    </div>
  );
}
