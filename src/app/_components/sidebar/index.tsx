import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from '../sidebar-menu-item';

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const menuItems: SidebarMenuItemProps[] = [
  {
    icon: <IoBrowsersOutline size={24} />,
    path: '/dashboard/main',
    subTitle: 'Visualización',
    title: 'Dashboard',
  },
  {
    icon: <IoCalculator size={24} />,
    path: '/dashboard/counter',
    subTitle: 'Contador - Client Side',
    title: 'Counter',
  },
];

export const Sidebar = () => {
  return (
    <div
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-auto"
      id="menu"
      style={{ width: '400px' }}
    >
      <div className="my-4 px-6" id="logo">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-1" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>

        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div className="px-6 py-10" id="profile">
        <p className="text-slate-500">Welcome back,</p>

        <Link
          className="inline-flex space-x-2 items-center"
          href="/dashboard/main"
        >
          <span>
            <Image
              alt="profile"
              className="rounded-full w-8 h-8"
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              width={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </Link>
      </div>

      <div className="w-full px-6" id="nav">
        {menuItems.map(element => (
          <SidebarMenuItem
            icon={element.icon}
            key={element.path}
            path={element.path}
            subTitle={element.subTitle}
            title={element.title}
          />
        ))}
      </div>
    </div>
  );
};
