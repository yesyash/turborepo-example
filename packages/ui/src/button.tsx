"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
