export const VIDEO_CONTENT = {
  badge: "Modern Agriculture",
  title: "Agriculture Matters to the Future of Development",
  background: {
    src: "/videos/bg-video.webp",
  },
  videoUrl: "https://videos.pexels.com/video-files/4406240/4406240-uhd_2560_1440_25fps.mp4",
};

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { id: "products", value: 200, suffix: "+", label: "Agriculture Products" },
  { id: "projects", value: 850, suffix: "+", label: "Projects Completed" },
  { id: "clients", value: 1200, suffix: "+", label: "Satisfied Clients" },
  { id: "farmers", value: 75, suffix: "+", label: "Experts Farmers" },
];
