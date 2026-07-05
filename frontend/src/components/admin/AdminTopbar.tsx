import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const AdminTopbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/95 px-8 backdrop-blur">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Portfolio Admin
        </h2>

        <p className="text-sm text-slate-400">
          Manage your portfolio content
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-72 rounded-xl border border-slate-700 bg-slate-800 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 transition hover:border-cyan-500">
          <FiBell className="text-lg text-white" />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-semibold text-slate-950">
            <FiUser />
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-white">
              Mohan
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;