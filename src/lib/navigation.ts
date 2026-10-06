export type NavItem = {
  label: string;
  to: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Ana səhifə", to: "/" },
  { label: "İdarə Heyəti", to: "/team" },
  { label: "Qeydiyyat", to: "/registration" },
];
