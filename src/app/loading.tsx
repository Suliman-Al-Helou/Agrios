export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative h-20 w-20 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#4BAF47] border-t-transparent" />
      </div>
      <p className="text-[#4BAF47] font-medium tracking-wider animate-pulse">LOADING...</p>
    </div>
  );
}
