import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Converts a File object to a URL string using URL.createObjectURL.
 *
 * @param {File} file - the File object to convert to a URL
 * @return {string} the URL string representing the File object
 */
export const convertFileToURL = (file: File | undefined): string => {
  if (!file) return "";
  const url = URL.createObjectURL(file);
  return url;
};


