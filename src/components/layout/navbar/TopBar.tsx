import Image from "next/image";
import Link from "next/link";
import Container from "../../ui/Container";
import { SOCIAL_LINKS, CONTACT_INFO, LOGO } from "@/constants/home/navbar";

export default function TopBar() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <Container>
        <div className="hidden items-center justify-between gap-6 py-6 md:flex md:flex-row md:gap-0">
          {/* Logo */}
          <Link href="/" aria-label="Agrios Home">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
              style={{ width: "auto", height: "auto" }}
                className="object-contain"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ id, icon: Icon, href, label }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-200 hover:text-green-600 hover:shadow-md"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">
            {CONTACT_INFO.map(
              ({ id, icon: Icon, label, value, href }, index) => (
                <div key={id} className="flex items-center">
                  {index !== 0 && (
                    <div className="mx-5 hidden h-10 w-px bg-gray-200 sm:block" />
                  )}
                  <Link
                    href={href}
                    target={id === "location" ? "_blank" : undefined}
                    rel={id === "location" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3"
                  >
                    <Icon
                      className="text-green-500 transition-transform duration-200 group-hover:scale-110"
                      size={28}
                    />
                    <div>
                      <p className="text-xs text-gray-300">{label}</p>
                      <p className="text-sm font-semibold text-gray-700">
                        {value}
                      </p>
                    </div>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
