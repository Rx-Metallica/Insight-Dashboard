import React from 'react'
import {
  LayoutGrid,
  Map,
  MapPin,
  BoxSelect,
  CircleDashed,
  TrendingUp,
  User,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: Map,        label: "Map" },
  { icon: MapPin,     label: "Waypoint" },
  { icon: BoxSelect,  label: "Select" },
  { icon: CircleDashed, label: "Goal" },
  { icon: TrendingUp, label: "Analytics" },
];

const Sidebar = () => {
  const [active, setActive] = React.useState('Dashboard');

  return (
    <aside className='bg-gray-800 w-20 h-screen text-white py-6 flex flex-col items-center shadow-xl'>
      
      {/* Logo */}
      <h1 className='text-sm font-bold mb-6'>ERIC</h1>

      {/* Top Nav */}
      <nav className='flex flex-col items-center gap-4'>
        {navItems.map((item) => (
          <button
            key={item.label}
            title={item.label}
            onClick={() => setActive(item.label)}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
              active === item.label
                ? 'bg-gray-600 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon size={22} strokeWidth={1.5} />
          </button>
        ))}
      </nav>

      {/* User icon pinned to bottom */}
      <button
        title="Profile"
        className='mt-auto w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-700 hover:text-white transition-all'
      >
        <User size={22} strokeWidth={1.5} />
      </button>

    </aside>
  );
};

export default Sidebar;