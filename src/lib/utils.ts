import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// combine twMerge and clsx functions for conditions classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
