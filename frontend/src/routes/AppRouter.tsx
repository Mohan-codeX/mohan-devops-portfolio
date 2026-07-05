import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/admin/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
import Contact from "../pages/Contact/Contact";

import AdminLogin from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import ProjectsAdmin from "../pages/admin/Projects";
import SkillsAdmin from "../pages/admin/Skills";
import ExperienceAdmin from "../pages/admin/Experience";
import EducationAdmin from "../pages/admin/Education";
import Messages from "../pages/admin/Messages";
import Resume from "../pages/admin/Resume";

const AppRouter = () => {
  return (
    <Routes>
      {/* ===========================
          PUBLIC WEBSITE
      =========================== */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ===========================
          ADMIN LOGIN
      =========================== */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* ===========================
          PROTECTED ADMIN ROUTES
      =========================== */}

      <Route element={<ProtectedRoute />}>
        <Route
          path="/admin"
          element={<AdminLayout />}
        >
          <Route index element={<Dashboard />} />
          <Route
            path="dashboard"
            element={<Dashboard />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="projects"
            element={<ProjectsAdmin />}
          />
          <Route
            path="skills"
            element={<SkillsAdmin />}
          />
          <Route
            path="experience"
            element={<ExperienceAdmin />}
          />
          <Route
            path="education"
            element={<EducationAdmin />}
          />
          <Route
            path="messages"
            element={<Messages />}
          />
          <Route
            path="resume"
            element={<Resume />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;