import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-t1", "text-t2", "text-t3", "text-t4", "text-t5", "text-t6", "text-t7"],
      "rounded": ["rounded-control", "rounded-card", "rounded-panel"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
