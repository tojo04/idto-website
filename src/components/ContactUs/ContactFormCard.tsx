import { DemoRequestForm } from "../DemoRequestModal";

export const CONTACT_DEMO_FORM_ID = "contact-demo-form";

type ContactFormCardProps = {
  onReset?: () => void;
  onSubmitSuccess?: () => void;
};

export default function ContactFormCard({
  onReset,
  onSubmitSuccess,
}: ContactFormCardProps) {
  return (
    <div
      id={CONTACT_DEMO_FORM_ID}
      className="w-full max-w-[760px] text-dark min-[1024px]:max-w-none"
    >
      <DemoRequestForm
        idPrefix="contact-demo-request"
        onReset={onReset}
        onSubmitSuccess={onSubmitSuccess}
        showHeader={false}
        showRequirementsField
        requirementsRequired={false}
      />
    </div>
  );
}
