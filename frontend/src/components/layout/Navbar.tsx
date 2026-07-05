import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/30">
            M
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              Mohan
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              DevOps Portfolio
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105">
            Resume
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-slate-950 lg:hidden"
          >
            <div className="flex flex-col p-6">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  {item.label}
                </NavLink>
              ))}

              <button className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 font-semibold text-white">
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;