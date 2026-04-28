export type Service = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  href: string;
};

export type ServicesSectionData = {
  badge: string;
  title: string;
  services: Service[];
};
