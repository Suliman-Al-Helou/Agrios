import FeatureCard from "./FeatureCard";
import Container from "@/components/ui/Container";

export default function Features() {
  const data = [
    {
      title: "Feature 01",
      subtitle: "We're using a new technology",
      image: "/section2-1.png",
    },
    {
      title: "Feature 02",
      subtitle: "Good in smart organic services",
      image: "/section2-2.png",
    },
    {
      title: "Feature 03",
      subtitle: "Reforming in the systems",
      image: "/section2-3.png",
    },
  ];

  return (
    <section className="bg-white relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <FeatureCard key={i} {...item} delay={i * 200} />
          ))}
        </div>
      </Container>
    </section>
  );
}