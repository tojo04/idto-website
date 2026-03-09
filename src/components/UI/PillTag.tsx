interface PillTagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: "light" | "dark";
}

export default function PillTag({
  label,
  active = false,
  onClick,
  variant = "light",
}: PillTagProps) {
  const lightStyles = active
    ? "bg-primary text-white border-primary"
    : "bg-white text-dark border-gray-border hover:border-primary/50";

  const darkStyles = active
    ? "bg-white text-blue-section border-white font-bold"
    : "bg-[#3757c8] text-white border-[#536bc9] hover:bg-[#4565d0]";

  return (
    <button
      onClick={onClick}
      className={`capitalize px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-sm lg:text-xl font-medium leading-[27px] border transition-all cursor-pointer whitespace-nowrap ${
        variant === "light" ? lightStyles : darkStyles
      }`}
    >
      {label}
    </button>
  );
}
