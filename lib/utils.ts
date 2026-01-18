/**
 * Utility functions
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes
 * Useful for conditional styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/\s+/g, '');
}

/**
 * Validate Latvian phone number
 */
export function isValidLatvianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, '');
  return /^\+371[2-9]\d{7}$/.test(cleaned);
}
