import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Gabungkan beberapa className, lalu selesaikan konflik antar-class
 * Tailwind (mis. "p-2" vs "p-4") dengan memenangkan class yang paling
 * belakangan ditulis.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
