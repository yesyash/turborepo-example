"use client";

import { ReactNode } from "react";
import { cn } from '@repo/utils/cn'

type ButtonProps = {
  size: "sm" | "md"
  children: ReactNode;
  className?: string;
  onClick?: () => void
}

export const Button = ({ size, children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cn("bg-blue-600 text-white px-4 py-2 text-base", size === 'sm' ? "text-sm" : "text-base", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
