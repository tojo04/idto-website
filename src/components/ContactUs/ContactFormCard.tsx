import { DemoRequestForm } from "../DemoRequestModal";

export const CONTACT_DEMO_FORM_ID = "contact-demo-form";

export default function ContactFormCard() {
  return (
    <div
      id={CONTACT_DEMO_FORM_ID}
      className="w-full max-w-[760px] text-dark min-[1024px]:max-w-none"
    >
      <DemoRequestForm
        idPrefix="contact-demo-request"
        showHeader={false}
        showRequirementsField
      />
    </div>
  );
}
