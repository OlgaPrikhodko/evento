import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// combine twMerge and clsx functions for conditions classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
