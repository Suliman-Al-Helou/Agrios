import { caveat } from "@/lib/fonts";
import Image from "next/image"
import AnimatedSection from "@/components/ui/AnimatedSection";
type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function FeatureCard({ title, subtitle, image }: Props) {
  return (
    <AnimatedSection
      animation="fadeInUp"
      className="
      bg-white rounded-2xl w-92.5 h-66 text-center
      flex justify-end flex-col
      shadow-md hover:shadow-xl
      transition-all duration-300
      hover:-translate-y-2 hover:scale-105
       -mt-15 
      max-w-sm mx-auto 
      mb-30 md:mb-0
    "
    >
      {/* small title */}
      <p className={` ${caveat.className} text-[#EEC044] text-sm mb-6 text-[24px]`}>
        {title}
      </p>

      {/* main title */}
      <h3 className=" text-[24px] font-bold text-gray-800  max-w-50 + mx-auto">{subtitle}</h3>

      {/* image */}
      <Image
        src={image}
        alt="feature image"
        width={90}
        height={90}
        className=" mx-auto object-cover rounded-md mb-3.25" />
    </AnimatedSection>
  );
}
