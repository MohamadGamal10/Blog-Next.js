import { NavLink } from "@/types/interfaces";
import { File, House } from "lucide-react";

export const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/", icon: House },
  { label: "المقالات", href: "/posts", icon: File },
];
