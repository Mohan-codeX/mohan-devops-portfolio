import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiEdit,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import {
  createExperience,
  deleteExperience,
  getExperiences,
  updateExperience,
  type Experience,
} from "../../services/experienceService";

const emptyExperience: Experience = {
  company: "",
  role: "",
  duration: "",
  description: "",
};

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<
    Experience[]
  >([]);

  const [experience, setExperience] =
    useState<Experience>(emptyExperience);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    try {
      setLoading(true);

      const data = await getExperiences();

      setExperiences(data);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to load experiences."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      if (editingId) {
        await updateExperience(
          editingId,
          experience
        );

        toast.success("Experience updated.");
      } else {
        await createExperience(experience);

        toast.success("Experience created.");
      }

      setExperience(emptyExperience);
      setEditingId(null);

      await loadExperiences();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to save experience."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (
    item: Experience
  ) => {
    setExperience(item);

    setEditingId(item.id ?? null);
  };

  const handleDelete = async (
    id?: number
  ) => {
    if (!id) return;

    const confirmed = window.confirm(
      "Delete this experience?"
    );

    if (!confirmed) return;

    try {
      await deleteExperience(id);

      toast.success("Experience deleted.");

      loadExperiences();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to delete experience."
      );
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Experience
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your work experience.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-4">
          <input
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="role"
            placeholder="Role"
            value={experience.role}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="duration"
            placeholder="Duration"
            value={experience.duration}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            value={experience.description}
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
              ? "Update Experience"
              : "Add Experience"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        {loading ? (
          <div className="p-8 text-center text-white">
            Loading experiences...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Company
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Duration
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
              {experiences.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-800"
                >
                  <td className="px-6 py-5 text-white">
                    {item.company}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.role}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.duration}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      Published
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
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

              {experiences.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-slate-400"
                  >
                    No experiences found.
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

export default ExperiencePage;