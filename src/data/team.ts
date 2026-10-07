export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string | null;
};

const portraits = import.meta.glob("../assets/team/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function portraitFor(id: string): string | null {
  const entry = Object.entries(portraits).find(([path]) => {
    const file = path.slice(path.lastIndexOf("/") + 1);
    return file.split(".")[0] === id;
  });
  return entry ? entry[1] : null;
}

export const TEAM: TeamMember[] = [
  {
    id: "huseyn-abdullayev",
    name: "HÜSEYN ABDULLAYEV",
    role: "Sədr",
    photo: portraitFor("huseyn-abdullayev"),
  },
  {
    id: "cavidan-haciyev",
    name: "CAVİDAN HACIYEV",
    role: "Sədr Müavini",
    photo: portraitFor("cavidan-haciyev"),
  },
  {
    id: "murad-aslanli",
    name: "MURAD ASLANLI",
    role: "Sədr Müavini",
    photo: portraitFor("murad-aslanli"),
  },
  {
    id: "tunar-huseynqulizade",
    name: "TUNAR HÜSEYNQULIZADƏ",
    role: "Ümumi Koordinator",
    photo: portraitFor("tunar-huseynqulizade"),
  },
];
