'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  HomeIcon, 
  PackageIcon, 
  ClipboardListIcon, 
  MessageSquareIcon, 
  Settings2Icon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Stock', href: '/stock', icon: PackageIcon },
  { name: 'Orders', href: '/orders', icon: ClipboardListIcon },
  { name: 'Chat', href: '/chat', icon: MessageSquareIcon },
  { name: 'Settings', href: '/settings', icon: Settings2Icon },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } flex flex-col border-r border-gray-800 bg-gray-900 transition-all duration-300`}
    >
      <div className="flex h-14 items-center border-b border-gray-800 px-3 justify-between">
        {!collapsed && (
          <span className="text-lg font-semibold text-blue-400">Inventory</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-1.5 hover:bg-gray-800 text-gray-400 hover:text-blue-400"
        >
          {collapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all
                ${isActive 
                  ? 'bg-gray-800 text-blue-400' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-blue-400'
                } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon className="h-5 w-5" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}