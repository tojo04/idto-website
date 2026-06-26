import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  Globe2,
  Hotel,
  IdCard,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageCircle,
  Repeat2,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

export const productPath = "/products/digital-check-in/";

export const heroBadges = [
  { label: "DPDP-ready", icon: ShieldCheck },
  { label: "Under 60s", icon: Clock3 },
  { label: "Consent-led", icon: UserCheck },
];

export const journeySteps = [
  { label: "Hotel Booking Confirmed", icon: Hotel },
  { label: "WhatsApp Check-In Link", icon: MessageCircle },
  { label: "Identity Verification", icon: Fingerprint },
  { label: "Verified Guest Profile", icon: BadgeCheck },
  { label: "Room Key Ready", icon: KeyRound },
];

export const floatingBadges = [
  "QR Check-In",
  "Guest Verified",
  "Passport Verified",
  "DPDP Ready",
  "Digital Room Key",
  "Check-In Complete",
];

export const painPoints = [
  {
    title: "Long Reception Queues",
    description: "Guests spend valuable time waiting after long journeys.",
    icon: Clock3,
  },
  {
    title: "Manual Documentation",
    description: "Paper forms and photocopies slow operations.",
    icon: FileText,
  },
  {
    title: "Repeat Guest Friction",
    description: "Returning guests repeatedly upload the same documents.",
    icon: Repeat2,
  },
  {
    title: "Privacy Risks",
    description: "Sensitive guest information is often handled manually.",
    icon: LockKeyhole,
  },
];

export const checkInModes = [
  {
    title: "Scan QR Code",
    description:
      "Guests scan a QR code placed at reception and complete verification instantly.",
    icon: ScanLine,
  },
  {
    title: "WhatsApp Check-In Link",
    description: "Guests receive a secure verification link before arrival.",
    icon: MessageCircle,
  },
];

export const documentOptions = [
  {
    title: "Aadhaar Verification",
    description: "Verify digitally through DigiLocker.",
    icon: Fingerprint,
  },
  {
    title: "Passport Verification",
    description: "Perfect for international travelers.",
    icon: Globe2,
  },
  {
    title: "Driving Licence",
    description: "Fast fallback for domestic guests.",
    icon: IdCard,
  },
  {
    title: "Voter ID",
    description: "Additional identity option.",
    icon: WalletCards,
  },
  {
    title: "Flexible Verification",
    description: "Support different guest journeys without operational complexity.",
    icon: FileCheck2,
  },
  {
    title: "Unified Platform",
    description: "One workflow. Multiple guest journeys.",
    icon: ClipboardCheck,
  },
];

export const complianceSteps = [
  "Consent Captured",
  "Purpose Clearly Shown",
  "Data Minimized",
  "Verification Secured",
  "Audit Trail Maintained",
  "Retention Configurable",
];

export const whyItMatters = [
  "No loose photocopies.",
  "No ID images floating on WhatsApp.",
  "No exposed guest registers.",
  "No unclear consent.",
];

export const impactItems = [
  {
    title: "Faster Check-Ins",
    description: "Reduce front desk wait times.",
    icon: Clock3,
  },
  {
    title: "Lower Drop-Offs",
    description: "Flexible verification journeys.",
    icon: CheckCircle2,
  },
  {
    title: "Cleaner Guest Records",
    description: "Digitally verified information.",
    icon: FileCheck2,
  },
  {
    title: "Better Compliance",
    description: "DPDP-ready workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Reduced Operational Load",
    description: "Less manual processing.",
    icon: Sparkles,
  },
  {
    title: "Improved Guest Satisfaction",
    description: "A seamless arrival experience.",
    icon: Users,
  },
];

export const returningGuestPoints = [
  "No repeated document upload.",
  "No repeated forms.",
  "No front-desk friction.",
];

export const intelligenceSignals = [
  "Identity",
  "Stay Preferences",
  "Travel Behaviour",
  "Visit Frequency",
  "Guest Segments",
  "Location Patterns",
  "Communication",
  "Loyalty Signals",
];

export const intelligenceStats = [
  {
    label: "Verified guests",
    value: "12,480",
    detail: "+18% this month",
  },
  {
    label: "Avg. check-in time",
    value: "52s",
    detail: "Under 60s target",
  },
  {
    label: "Returning guests",
    value: "37%",
    detail: "Recognized via mobile",
  },
];

export const propertyCards = [
  "Mumbai - Marine Bay",
  "Goa - Coastline Resort",
  "Delhi - Capital Suites",
  "Bengaluru - Tech Park Stay",
];

export const contactChannels = [
  { label: "WhatsApp", icon: MessageCircle },
  { label: "SMS", icon: Mail },
  { label: "QR code", icon: ScanLine },
  { label: "Reception", icon: Building2 },
];
