export const TESTIMONIALS_CONTENT = {
  badge: "Our Testimonials",
  title: "What They are Talking About Agrios",
  description:
    "Hear from our satisfied customers around the world who trust Agrios for fresh, organic, and sustainably grown produce delivered to their door.",
  cta: {
    label: "View All Testimonials",
    href: "/testimonials",
  },
};

export type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
  imageAlt: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Bonnie Tolbert",
    rating: 5,
    text: "Agrios has completely changed how I think about food. The produce is incredibly fresh and I love knowing exactly where it comes from. Highly recommended!",
    image: "/images/home/testimonials/Testimonials-1.webp",
    imageAlt: "Bonnie Tolbert profile photo",
  },
  {
    id: 2,
    name: "James Harrison",
    rating: 5,
    text: "I've been ordering from Agrios for over a year now. The quality is consistently excellent, and the packaging is eco-friendly. A truly outstanding farm.",
    image: "/images/home/testimonials/Testimonials-2.webp",
    imageAlt: "James Harrison profile photo",
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    rating: 5,
    text: "The freshest vegetables I've ever tasted. Agrios delivers on their promise of pure organic farming. My family's health has never been better!",
    image: "/images/home/testimonials/Testimonials-3.webp",
    imageAlt: "Sarah Mitchell profile photo",
  },
];
