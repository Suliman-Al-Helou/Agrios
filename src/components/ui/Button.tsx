import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
      bg-[#4BAF47] text-white px-6 py-3 rounded-full
      transition-all duration-300 ease-out
      hover:bg-green-600
      hover:shadow-lg
      hover:scale-105
      active:scale-95
    "
    >
      {children}
    </button>
  );
}