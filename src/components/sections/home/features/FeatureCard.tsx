import { caveat } from "@/lib/fonts";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
type Props = {
  title: string;
  subtitle: string;
  image: string;
  delay?: number;
};

export default function FeatureCard({
  title,
  subtitle,
  image,
  delay = 0,
}: Props) {
  return (
    <AnimatedSection
      animation="fadeInUp"
      delay={delay}
      className="mx-auto -mt-15 mb-30 flex h-66 w-92.5 max-w-sm flex-col justify-end rounded-2xl bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl md:mb-0"
    >
      {/* small title */}
      <p
        className={` ${caveat.className} mb-6 text-sm text-[24px] text-[#EEC044]`}
      >
        {title}
      </p>

      {/* main title */}
      <h3 className="+ mx-auto max-w-50 text-[24px] font-bold text-gray-800">
        {subtitle}
      </h3>

      {/* image */}
<Image
  src={image}
  alt={subtitle}
  width={0}
  height={0}
  sizes="90px"
  className="mx-auto rounded-md mb-3.25 w-[90px] h-auto"
/>
    </AnimatedSection>
  );
}
