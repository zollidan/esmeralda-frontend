"use client";

import { NavItem } from "./nav-item";

import { GoHomeFill } from "react-icons/go";
import { CiSettings, CiFileOn, CiParking1 } from "react-icons/ci";

const routes = [
  {
    title: "Parsers",
    href: "/parsers",
    icon: CiParking1,
  },
  {
    title: "Files",
    href: "/files",
    icon: CiFileOn,
  },
];

export const Nav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r">
      <div className="flex flex-col justify-between items-center gap-4 px-2 py-4 h-full">
        <nav className="flex flex-col items-center gap-4">
          <NavItem href="/" title="Home" icon={GoHomeFill} />

          {routes.map((route) => (
            <NavItem
              key={route.title}
              href={route.href}
              title={route.title}
              icon={route.icon}
            />
          ))}
        </nav>
        <NavItem href="/settings" title="Settings" icon={CiSettings} />
      </div>
    </aside>
  );
};
