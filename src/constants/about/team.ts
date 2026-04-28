// Team Members
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kevin",
    name: "Kevin Smith",
    role: "Farmer",
    image: "/images/about/members/member-1.svg",
  },
  {
    id: "jessica",
    name: "Jessica Brown",
    role: "Farmer",
    image: "/images/about/members/member-2.svg",
  },
  {
    id: "david",
    name: "David Martin",
    role: "Farmer",
    image: "/images/about/members/member-3.svg",
  },
];