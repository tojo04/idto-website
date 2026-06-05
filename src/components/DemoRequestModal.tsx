import {
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  X,
} from "lucide-react";
import {
  submitDemoRequest,
  type DemoRequestPayload,
} from "../services/demoRequestService";

export const DEMO_REQUEST_MODAL_EVENT = "idto:open-demo-request-modal";

const initialFormData: DemoRequestPayload = {
  companyName: "",
  fullName: "",
  workEmail: "",
  phone: "",
  consentToContact: false,
};

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "mail.com",
  "rediffmail.com",
]);

type SubmitState = "idle" | "submitting" | "success" | "pending" | "error";

type DemoRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DemoRequestFormProps = {
  idPrefix?: string;
  onSuccessAction?: () => void;
  successActionLabel?: string;
};

function isWorkEmail(email: string) {
  const trimmedEmail = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmedEmail)) {
    return false;
  }

  const domain = trimmedEmail.split("@").pop();
  return Boolean(domain && !PERSONAL_EMAIL_DOMAINS.has(domain));
}

export function DemoRequestForm({
  idPrefix = "demo-request",
  onSuccessAction,
  successActionLabel = "Send another request",
}: DemoRequestFormProps) {
  const [formData, setFormData] =
    useState<DemoRequestPayload>(initialFormData);
  const [formErrors, setFormErrors] =
    useState<Partial<Record<keyof DemoRequestPayload, string>>>({});
  const [touchedFields, setTouchedFields] =
    useState<Partial<Record<keyof DemoRequestPayload, boolean>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const formatPhoneValue = (phoneDigits: string) =>
    phoneDigits ? `+91 ${phoneDigits}` : "+91";

  const titleId = `${idPrefix}-title`;

  const normalizePhoneValue = (value: string) => {
    const raw = value.trim();

    if (
      raw === "" ||
      raw === "+" ||
      raw === "+9" ||
      raw === "+91" ||
      raw === "+91 "
    ) {
      return "";
    }

    let digits = raw.replace(/^\+?91[\s-]*/, "").replace(/\D/g, "");

    if (digits.length > 10) {
      digits = digits.slice(0, 10);
    }

    return digits;
  };

  const validateField = (
    field: keyof DemoRequestPayload,
    value: string | boolean
  ) => {
    if (field === "workEmail") {
      const email = String(value).trim();
      if (!email) {
        return "Work email is required.";
      }
      if (!isWorkEmail(email)) {
        return "Enter a valid work email address, not a personal email.";
      }
      return "";
    }

    if (field === "phone") {
      const digits = String(value).replace(/\D/g, "");
      if (!digits) {
        return "Phone number is required.";
      }
      if (digits.length !== 10) {
        return "Enter a 10-digit phone number.";
      }
      return "";
    }

    if (field === "consentToContact") {
      return value === true
        ? ""
        : "Please confirm that our team can contact you.";
    }

    if (field === "fullName" || field === "companyName") {
      return String(value).trim() ? "" : "This field is required.";
    }

    return "";
  };

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setFormErrors({});
    setTouchedFields({});
    setSubmitState("idle");
    setStatusMessage("");
  }, []);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof DemoRequestPayload;
    const value =
      field === "phone"
        ? normalizePhoneValue(event.target.value)
        : event.target.value;

    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (touchedFields[field]) {
      setFormErrors((current) => ({
        ...current,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof DemoRequestPayload;
    const value =
      field === "phone"
        ? normalizePhoneValue(event.target.value)
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setTouchedFields((current) => ({
      ...current,
      [field]: true,
    }));

    setFormErrors((current) => ({
      ...current,
      [field]: validateField(field, value),
    }));
  };

  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const consentToContact = event.target.checked;

    setFormData((current) => ({
      ...current,
      consentToContact,
    }));

    if (touchedFields.consentToContact) {
      setFormErrors((current) => ({
        ...current,
        consentToContact: validateField("consentToContact", consentToContact),
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fieldsToValidate: Array<keyof DemoRequestPayload> = [
      "fullName",
      "companyName",
      "workEmail",
      "phone",
      "consentToContact",
    ];

    const nextErrors: Partial<Record<keyof DemoRequestPayload, string>> = {};

    fieldsToValidate.forEach((field) => {
      nextErrors[field] = validateField(field, formData[field]);
    });

    const hasErrors = Object.values(nextErrors).some(Boolean);

    setFormErrors(nextErrors);
    setTouchedFields({
      fullName: true,
      companyName: true,
      workEmail: true,
      phone: true,
      consentToContact: true,
    });

    if (hasErrors) {
      setSubmitState("error");
      setStatusMessage("");
      return;
    }

    setSubmitState("submitting");
    setStatusMessage("");

    try {
      const result = await submitDemoRequest(formData);

      if (result.delivery === "sent") {
        setSubmitState("success");
        setStatusMessage("");
        setFormData(initialFormData);
        return;
      }

      setSubmitState("pending");
      setStatusMessage(
        "Thanks. The form is ready, and delivery will connect once the Google Sheet and team email are added."
      );
    } catch (error) {
      console.error("Demo request submission failed", error);
      setSubmitState("error");
      setStatusMessage(
        "We could not submit the request right now. Please try again in a moment."
      );
    }
  };

  return (
    <>
      {submitState === "success" ? (
        <div className="flex min-h-[360px] flex-col items-center justify-center px-2 py-12 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={34} aria-hidden="true" />
          </span>
          <h2
            id={titleId}
            className="mt-6 font-heading text-[30px] leading-[1.15] text-black md:text-[42px]"
          >
            Request received.
          </h2>
          <p className="mt-4 max-w-[460px] text-[15px] leading-[1.7] text-black/60 md:text-[17px]">
            Thanks for sharing your details. Our team will get back to you with
            the next steps.
          </p>
          <button
            type="button"
            onClick={onSuccessAction ?? resetForm}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition hover:bg-primary-dark cursor-pointer"
          >
            {successActionLabel}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[620px] flex-col gap-2 pr-0 sm:pr-12">
            <h2
              id={titleId}
              className="font-heading text-[28px] leading-[1.15] text-black md:text-[40px]"
            >
              Book a demo
            </h2>
            <p className="text-[14px] leading-[1.7] text-black/60 md:text-[16px]">
              Share a few details and our team will get back to you.
            </p>
          </div>

          <div className="mt-8 grid gap-5 min-[1024px]:grid-cols-2">
            <label className="flex flex-col gap-2 text-[13px] font-semibold text-black">
              Name
              <input
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleTextChange}
                onBlur={handleBlur}
                className="h-12 w-full rounded-[14px] border border-black/10 bg-[#f8fafc] px-4 text-[15px] font-normal text-black outline-none transition focus:border-primary focus:bg-white"
                placeholder="Full name"
              />
              {formErrors.fullName && (
                <p className="text-red-700 text-[13px] mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-[13px] font-semibold text-black">
              Company name
              <span className="relative">
                <Building2
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  size={18}
                  aria-hidden="true"
                />
                <input
                  required
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  className="h-12 w-full rounded-[14px] border border-black/10 bg-[#f8fafc] pl-11 pr-4 text-[15px] font-normal text-black outline-none transition focus:border-primary focus:bg-white"
                  placeholder="Company Pvt Ltd"
                />
              </span>
              {formErrors.companyName && (
                <p className="text-red-700 text-[13px] mt-1">
                  {formErrors.companyName}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-[13px] font-semibold text-black">
              Work email
              <span className="relative">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  size={18}
                  aria-hidden="true"
                />
                <input
                  required
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  className="h-12 w-full rounded-[14px] border border-black/10 bg-[#f8fafc] pl-11 pr-4 text-[15px] font-normal text-black outline-none transition focus:border-primary focus:bg-white"
                  placeholder="name@company.com"
                />
              </span>
              {formErrors.workEmail && (
                <p className="text-red-700 text-[13px] mt-1">
                  {formErrors.workEmail}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2 text-[13px] font-semibold text-black">
              Phone number
              <span className="relative">
                <Phone
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  size={18}
                  aria-hidden="true"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formatPhoneValue(formData.phone)}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  className="h-12 w-full rounded-[14px] border border-black/10 bg-[#f8fafc] pl-11 pr-4 text-[15px] font-normal text-black outline-none transition focus:border-primary focus:bg-white"
                  placeholder="+91 98765 43210"
                  inputMode="tel"
                />
              </span>
              {formErrors.phone && (
                <p className="text-red-700 text-[13px] mt-1">
                  {formErrors.phone}
                </p>
              )}
            </label>
          </div>

          <label className="mt-6 flex items-start gap-3 text-[13px] leading-[1.6] text-black/65">
            <input
              required
              type="checkbox"
              name="consentToContact"
              checked={formData.consentToContact}
              onChange={handleConsentChange}
              onBlur={handleBlur}
              className="mt-1 size-4 shrink-0 accent-primary"
            />
            <span>I agree that idto.ai may contact me about this request.</span>
          </label>
          {formErrors.consentToContact && (
            <p className="text-red-700 text-[13px] mt-2">
              {formErrors.consentToContact}
            </p>
          )}

          {statusMessage && (
            <p
              className={`mt-5 rounded-[14px] px-4 py-3 text-[13px] leading-[1.6] ${
                submitState === "error"
                  ? "bg-red-50 text-red-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 text-[15px] font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto cursor-pointer"
          >
            {submitState === "submitting" ? (
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            ) : (
              <ArrowRight size={18} aria-hidden="true" />
            )}
            Submit request
          </button>
        </form>
      )}
    </>
  );
}

export default function DemoRequestModal({
  isOpen,
  onClose,
}: DemoRequestModalProps) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-request-title"
            className="relative max-h-[calc(100dvh-48px)] w-full max-w-[850px] overflow-y-auto rounded-[30px] border border-black/10 bg-white p-5 text-dark shadow-[0_28px_90px_rgba(4,10,28,0.22)] md:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 transition hover:bg-black/5 hover:text-black cursor-pointer"
              aria-label="Close demo form"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <DemoRequestForm
              idPrefix="demo-request"
              onSuccessAction={handleClose}
              successActionLabel="Close"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
