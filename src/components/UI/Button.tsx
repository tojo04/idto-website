interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "white" | "outline-white";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export default function Button({
  title,
  onClick,
  variant = "primary",
  size = "md",
  href,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap tracking-tight";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm lg:px-6 lg:py-2.5 lg:text-base",
    md: "w-[108px] h-[34px] text-[12px] lg:w-auto lg:h-auto lg:px-9 lg:py-4 lg:text-lg",
    lg: "w-[108px] h-[34px] text-[12px] lg:w-auto lg:h-auto lg:px-9 lg:py-5 lg:text-xl",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white border-[1.5px] border-white/50 hover:bg-primary-dark",
    outline:
      "bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary/5",
    white:
      "bg-white text-primary border-[1.5px] border-white/50 hover:bg-gray-50",
    "outline-white":
      "bg-transparent text-white border-[1.5px] border-white hover:bg-white/10",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {title}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {title}
    </button>
  );
}
