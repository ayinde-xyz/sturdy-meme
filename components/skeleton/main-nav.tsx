"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  className?: string;
}

const MainNav = ({ className }: MainNavProps) => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/#home" || pathname === "/",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
    {
      href: "/team",
      label: "Our Team",
      active: pathname === "/team",
    },
  ];
  return (
    <nav className={cn("", className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={`px-3 py-2 rounded-md text-sm font-medium ${route.active ? "text-green-500" : "text-gray-700 dark:text-gray-300 hover:text-green-500"}`}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
