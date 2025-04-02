import { Home, ShoppingCart, BarChart3, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-4">
        <SidebarItem icon={<Home size={20} />} label="Dashboard" />
        <SidebarItem icon={<ShoppingCart size={20} />} label="Products" />
        <SidebarItem icon={<BarChart3 size={20} />} label="Analytics" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-all">
      {icon}
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default Sidebar;

