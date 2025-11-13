import { Home, Settings, BarChart2 } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  label?: string;
  disabled?: boolean;
  organization: boolean;
  mobile: boolean;
};

export const mainNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    organization: true,
    mobile: true,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart2,
    organization: true,
    mobile: true,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    organization: true,
    mobile: true,
  },
];

export const mobileNav = mainNav.filter((item) => item.mobile);
