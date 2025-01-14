import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "secondary";
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  textColor?: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  backgroundColor,
  textColor,
  outline = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none hover:text-black";

  const variantClasses = {
    default: "hover:bg-gray-200",
    destructive: "hover:bg-red-700",
    secondary: "hover:bg-gray-200",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const inlineStyles: React.CSSProperties = {
    backgroundColor: outline ? "white" : backgroundColor,
    color: textColor?.startsWith("text-") ? undefined : textColor,
    borderColor: backgroundColor,
  };

  // Tailwind 클래스 처리
  const customTextColor = textColor?.startsWith("text-") ? textColor : "";

  const outlineClasses = outline ? "border bg-white" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        outlineClasses,
        customTextColor,
        className
      )}
      style={inlineStyles}
      {...props}
    />
  );
};

export { Button };
