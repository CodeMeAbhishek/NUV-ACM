type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null };

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
} 