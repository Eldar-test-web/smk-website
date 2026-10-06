export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string | null;
};

export const TEAM: TeamMember[] = [
  {
    id: "huseyn-abdullayev",
    name: "HÜSEYN ABDULLAYEV",
    role: "Sədr",
    photo: null,
  },
  {
    id: "cavidan-haciyev",
    name: "CAVİDAN HACIYEV",
    role: "Sədr Müavini",
    photo: null,
  },
  {
    id: "murad-aslanli",
    name: "MURAD ASLANLI",
    role: "Sədr Müavini",
    photo: null,
  },
  {
    id: "tunar-huseynqulizade",
    name: "TUNAR HÜSEYNQULIZADƏ",
    role: "Ümumi Koordinator",
    photo: null,
  },
];
