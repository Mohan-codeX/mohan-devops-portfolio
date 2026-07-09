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
  location: "",
  current: false,
  technologies: [],
  responsibilities: [],
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

  const [technologiesInput, setTechnologiesInput] =
    useState("");

  const [
    responsibilitiesInput,
    setResponsibilitiesInput,
  ] = useState("");

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
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setExperience((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setExperience(emptyExperience);
    setEditingId(null);
    setTechnologiesInput("");
    setResponsibilitiesInput("");
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const payload: Experience = {
        ...experience,
        technologies: technologiesInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),

        responsibilities: responsibilitiesInput
          .split("\n")
          .map((r) => r.trim())
          .filter(Boolean),
      };

      if (editingId) {
        await updateExperience(editingId, payload);

        toast.success("Experience updated.");
      } else {
        await createExperience(payload);

        toast.success("Experience created.");
      }

      resetForm();

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

  const handleEdit = (item: Experience) => {
    setExperience({
      ...item,
      location: item.location ?? "",
      current: item.current ?? false,
      technologies: item.technologies ?? [],
      responsibilities: item.responsibilities ?? [],
    });

    setTechnologiesInput(
      (item.technologies ?? []).join(", ")
    );

    setResponsibilitiesInput(
      (item.responsibilities ?? []).join("\n")
    );

    setEditingId(item.id ?? null);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    const confirmed = window.confirm(
      "Delete this experience?"
    );

    if (!confirmed) return;

    try {
      await deleteExperience(id);

      toast.success("Experience deleted.");

      await loadExperiences();
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

          <input
            name="location"
            placeholder="Location"
            value={experience.location}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <label className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <input
              type="checkbox"
              name="current"
              checked={experience.current}
              onChange={handleChange}
            />

            Currently Working Here
          </label>

          <input
            placeholder="Technologies (comma separated)"
            value={technologiesInput}
            onChange={(e) =>
              setTechnologiesInput(e.target.value)
            }
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <textarea
            rows={4}
            placeholder="Responsibilities (one per line)"
            value={responsibilitiesInput}
            onChange={(e) =>
              setResponsibilitiesInput(
                e.target.value
              )
            }
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

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-60"
            >
              <FiPlus />

              {saving
                ? "Saving..."
                : editingId
                ? "Update Experience"
                : "Add Experience"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800"
            >
              Reset
            </button>
          </div>

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
                  Location
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

                  <td className="px-6 py-5 text-slate-300">
                    {item.location}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        item.current
                          ? "bg-green-500/20 text-green-400"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {item.current
                        ? "Current"
                        : "Previous"}
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
                    colSpan={6}
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
