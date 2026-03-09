interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  children,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-heading text-[28px] lg:text-[48px] leading-[1.3] tracking-tight ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
