import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getDashboardStats, type DashboardStats } from "../../services/dashboardService";

const emptyStats: DashboardStats = {
  users: 0,
  projects: 0,
  skills: 0,
  experiences: 0,
  educations: 0,
  contacts: 0,
  unread_contacts: 0,
  visitors: 0,
};

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>(emptyStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const data = await getDashboardStats();
      setStats(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.detail ?? "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-slate-400">
          Welcome to your portfolio admin dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-slate-400">Projects</h2>
          <p className="mt-3 text-4xl font-bold text-cyan-400">
            {loading ? "..." : stats.projects}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-slate-400">Skills</h2>
          <p className="mt-3 text-4xl font-bold text-cyan-400">
            {loading ? "..." : stats.skills}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-slate-400">Experience</h2>
          <p className="mt-3 text-4xl font-bold text-cyan-400">
            {loading ? "..." : stats.experiences}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-slate-400">Messages</h2>
          <p className="mt-3 text-4xl font-bold text-cyan-400">
            {loading ? "..." : stats.contacts}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Portfolio Overview
        </h2>

        <p className="text-slate-400">
          Dashboard is now connected to the backend.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
