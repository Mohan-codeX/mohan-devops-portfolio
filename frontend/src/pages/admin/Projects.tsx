import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiEdit,
  FiEye,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
  type Project,
} from "../../services/projectService";

const emptyProject: Project = {
  title: "",
  description: "",
  github_url: "",
  live_url: "",
  image_url: "",
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] =
    useState<Project>(emptyProject);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(
    null
  );

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);

      const data = await getProjects();

      setProjects(data);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to load projects."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      if (editingId) {
        await updateProject(editingId, project);
        toast.success("Project updated.");
      } else {
        await createProject(project);
        toast.success("Project created.");
      }

      setProject(emptyProject);
      setEditingId(null);

      await loadProjects();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to save project."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item: Project) => {
    setProject(item);
    setEditingId(item.id ?? null);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    const confirmed = window.confirm(
      "Delete this project?"
    );

    if (!confirmed) return;

    try {
      await deleteProject(id);

      toast.success("Project deleted.");

      loadProjects();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to delete project."
      );
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Projects
          </h1>

          <p className="mt-2 text-slate-400">
            Manage portfolio projects.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-4">
          <input
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="github_url"
            placeholder="GitHub URL"
            value={project.github_url}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="live_url"
            placeholder="Live URL"
            value={project.live_url}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="image_url"
            placeholder="Image URL"
            value={project.image_url}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex w-fit items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-60"
          >
            <FiPlus />
            {saving
              ? "Saving..."
              : editingId
              ? "Update Project"
              : "Add Project"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        {loading ? (
          <div className="p-8 text-center text-white">
            Loading projects...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Title
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Description
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-800"
                >
                  <td className="px-6 py-5 text-white">
                    {item.title}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.description}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      Published
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        className="rounded-lg bg-slate-800 p-2 text-cyan-400 hover:bg-slate-700"
                      >
                        <FiEye />
                      </button>

                      <button
                        onClick={() =>
                          handleEdit(item)
                        }
                        className="rounded-lg bg-slate-800 p-2 text-yellow-400 hover:bg-slate-700"
                      >
                        <FiEdit />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="rounded-lg bg-slate-800 p-2 text-red-400 hover:bg-slate-700"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {projects.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-8 text-center text-slate-400"
                  >
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Projects;