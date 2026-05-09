import type { LucideIcon } from "lucide-react";

export type TextProps = {
  label: string;
  placeholder: string;
  type?: string;
  icon?: LucideIcon | undefined;
  multiline?: number;
};
