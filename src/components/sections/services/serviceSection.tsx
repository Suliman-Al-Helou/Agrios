import Link from "next/link";
import Image from "next/image";

export default function ServicesSection({ data }) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-64 w-full">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <div className="absolute top-0 w-full text-center bg-white py-2 font-semibold">
              {service.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}