import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiGrid,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";
import toast from "react-hot-toast";

import { removeToken } from "../../utils/token";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FiHome,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: FiUser,
  },
  {
    title: "Projects",
    path: "/admin/projects",
    icon: FiFolder,
  },
  {
    title: "Skills",
    path: "/admin/skills",
    icon: FiGrid,
  },
  {
    title: "Experience",
    path: "/admin/experience",
    icon: FiBriefcase,
  },
  {
    title: "Education",
    path: "/admin/education",
    icon: FiBookOpen,
  },
  {
    title: "Messages",
    path: "/admin/messages",
    icon: FiMail,
  },
  {
    title: "Resume",
    path: "/admin/resume",
    icon: FiFileText,
  },
];

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    removeToken();

    toast.success("Logged out successfully.");

    navigate("/admin/login", {
      replace: true,
    });
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-6 py-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          Mohan Admin
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Portfolio CMS
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                      isActive
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;