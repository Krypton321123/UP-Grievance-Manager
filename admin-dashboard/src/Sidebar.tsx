import { Link } from "react-router-dom";
import { Home, FolderOpen, Clock, CheckCircle, AlertTriangle, BarChart2, FileText, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center space-x-2 p-4">
        <img
          src="https://via.placeholder.com/40" // Replace with your logo
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-lg font-semibold">CitizenConnect</h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <SidebarLink to="/dashboard" icon={<Home size={20} />} label="Dashboard" />
          <SidebarLink to="/intake" icon={<FolderOpen size={20} />} label="Intake" />
          <SidebarLink to="/pending" icon={<Clock size={20} />} label="Pending" />
          <SidebarLink to="/closed" icon={<CheckCircle size={20} />} label="Closed" />
          <SidebarLink to="/escalations" icon={<AlertTriangle size={20} />} label="Escalations" />
          <SidebarLink to="/insights" icon={<BarChart2 size={20} />} label="Analytics" />
          
          <SidebarLink to="/admin" icon={<Settings size={20} />} label="Admin" />
        </ul>
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
