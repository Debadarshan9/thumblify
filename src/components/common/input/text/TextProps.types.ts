import type { LucideIcon } from "lucide-react";
import type { ChangeEvent } from "react";

export type TextProps = {
  label: string;
  placeholder: string;
  type?: string;
  icon?: LucideIcon | undefined;
  multiline?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  maxLength?: number;
  className?: string;
};
