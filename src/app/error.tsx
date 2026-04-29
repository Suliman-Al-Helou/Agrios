"use client";

import { useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <FaExclamationTriangle className="mb-6 text-6xl text-[#4BAF47]" />
      <SectionHeader 
        badge="Error"
        title="Something went wrong!"
        align="center"
      />
      <p className="mt-4 mb-8 text-gray-600 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred while trying to load this page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-xl bg-[#4BAF47] px-8 py-4 font-bold text-white transition-all hover:bg-[#3d913a]"
      >
        Try Again
      </button>
    </div>
  );
}
