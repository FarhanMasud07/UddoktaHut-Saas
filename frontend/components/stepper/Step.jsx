"use client"

import { cn } from "@/lib/utils";

export function Step({ label, step, isActive, isCompleted }) {
    return (
        <div className="relative flex flex-col items-center w-full text-center">
            <div
                className={cn(
                    "z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm  font-semibold transition-all duration-300",
                    isCompleted
                        ? "  bg-green-400  dark:text-green-800 text-green-700"
                        : isActive
                            ? "border-2 border-green-400 dark:text-green-100 text-green-500 bg-background"
                            : "border border-green-400 dark:text-green-100 text-green-500 bg-background"
                )}
            >
                {isCompleted ? "✓" : step}
            </div>
            <span
                className={cn(
                    "text-xs mt-2 transition-colors duration-300 dark:text-green-100 text-green-500",
                    isActive ? "font-extrabold text-[13.5px]" : " font-medium"
                )}
            >
                {label}
            </span>
        </div>
    );
}
