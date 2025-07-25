'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({
  icon,
  path,
  title,
  subTitle,
}: SidebarMenuItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/30 transition ease-linear duration-150 ${pathName === path ? 'bg-blue-800' : ''}`}
      href={path}
    >
      <div>{icon}</div>

      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
