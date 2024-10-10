"use client";

import { ReactNode } from "react";
import { cn } from '@repo/utils/cn'

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cn("bg-blue-600 text-white px-4 py-2 text-base", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
