import type { LucideIcon } from "lucide-react";

export type ButtonProps = {
  fullWidth?: boolean;
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  handleClick?: () => void;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  className?: string;
  rounded?: boolean;
};

type ButtonVariant = "text" | "outlined" | "contained";
