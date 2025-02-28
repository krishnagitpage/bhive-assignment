import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline_primary" | "outline_secondary";
  className?: string;
  size?: "lg" | "md" | "sm" | "sm_icon" | "md_icon" | "lg_icon";
  textTag?: string;
};

const buttonVariants = cva(
  "font-bold rounded", // Base classes
  {
    variants: {
      variant: {
        primary: "bg-primary text-white border border-primary_stroke",
        secondary: "bg-secondary border border-secondary_stroke",
        outline_primary: "border border-primary_stroke text-primary bg-white",
        outline_secondary: "border border-secondary_stroke text-secondary",
      },
      size: {
        sm_icon: "text-sm p-1",
        md_icon: "text-base p-2",
        lg_icon: "text-lg py-3 p-3",
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-4",
        lg: "text-lg py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm_icon",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm_icon",
  children,
  className,
  textTag,
}) => {
  const computedClassName = buttonVariants({ variant, size });
  return (
    <button
      className={cn(computedClassName, className ? className : "", "relative")}
    >
      {textTag && (
        <span
          className="
          absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 
          text-xs font-normal 
          bg-text_primary 
          px-2 py-1 
          rounded 
          mx-auto"
        >
          {textTag}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
