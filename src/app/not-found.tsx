import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-9xl font-bold text-[#4BAF47] drop-shadow-sm opacity-90">
        404
      </h1>
      <SectionHeader 
        badge="Page Not Found"
        title="Oops! We can't find that page"
        align="center"
      />
      <p className="mt-4 mb-8 max-w-lg text-gray-600">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center rounded-xl bg-[#4BAF47] px-8 py-4 font-bold text-white transition-all hover:bg-[#3d913a]"
      >
        Back to Home
      </Link>
    </main>
  );
}
