// ─── Shared across all pages that show stats ─────────────
// Home: StatsBar فوق الفيديو
// About: StatsBar تحت الفيديو
// استخدم هاد الملف في كل مكان بدل ما تكرر البيانات

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { id: "products", value: 200,  suffix: "+", label: "Agriculture Products" },
  { id: "projects", value: 850,  suffix: "+", label: "Projects Completed"   },
  { id: "clients",  value: 1200, suffix: "+", label: "Satisfied Clients"    },
  { id: "farmers",  value: 75,   suffix: "+", label: "Experts Farmers"      },
];
