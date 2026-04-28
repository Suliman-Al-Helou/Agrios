export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
};

export const TESTIMONIALS_CONTENT = {
  badge: "Our Testimonials",
  title: "What They Say",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Bonnie Tolbet",
    role: "Customer",
    image: "/images/home/testimonials/Testimonials-1.png",
    text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
  },
  {
    id: 2,
    name: "Sarah Albert",
    role: "Customer",
    image: "/images/home/testimonials/Testimonials-3-.jpg",
    text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
  },
];