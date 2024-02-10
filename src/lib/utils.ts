import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

// combine twMerge and clsx functions for conditions classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  return event;
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
  });

  return events;
}
