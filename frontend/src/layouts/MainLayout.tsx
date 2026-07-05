import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#312e81_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#0f766e_0%,transparent_35%),linear-gradient(to_bottom,#050816,#0b1120)]" />

      {/* Decorative blur */}
      <div className="absolute left-[-8rem] top-[-8rem] -z-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-[-8rem] bottom-[-8rem] -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;