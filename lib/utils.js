// This file helps combine Tailwind CSS classes dynamically using clsx and tailwind-merge.

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
