import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

import {
  createEducation,
  deleteEducation,
  getEducations,
  updateEducation,
  type Education,
} from "../../services/educationService";

const emptyEducation: Education = {
  institution: "",
  degree: "",
  duration: "",
  grade: "",
};

const EducationPage = () => {
  const [educations, setEducations] = useState<Education[]>([]);
  const [education, setEducation] = useState<Education>(emptyEducation);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    loadEducations();
  }, []);

  const loadEducations = async () => {
    try {
      setLoading(true);

      const data = await getEducations();

      setEducations(data);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to load education."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      if (editingId) {
        await updateEducation(editingId, education);

        toast.success("Education updated.");
      } else {
        await createEducation(education);

        toast.success("Education created.");
      }

      setEducation(emptyEducation);
      setEditingId(null);

      await loadEducations();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to save education."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item: Education) => {
    setEducation(item);

    setEditingId(item.id ?? null);
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    const confirmed = window.confirm(
      "Delete this education?"
    );

    if (!confirmed) return;

    try {
      await deleteEducation(id);

      toast.success("Education deleted.");

      await loadEducations();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to delete education."
      );
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Education
          </h1>

          <p className="mt-2 text-slate-400">
            Manage education details.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-4">
          <input
            name="institution"
            placeholder="Institution"
            value={education.institution}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="duration"
            placeholder="Duration"
            value={education.duration}
            onChange={handleChange}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            name="grade"
            placeholder="Grade"
            value={education.grade}
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
              ? "Update Education"
              : "Add Education"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        {loading ? (
          <div className="p-8 text-center text-white">
            Loading education...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Institution
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Degree
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Duration
                </th>

                <th className="px-6 py-4 text-left text-sm text-slate-300">
                  Grade
                </th>

                <th className="px-6 py-4 text-center text-sm text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {educations.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-800"
                >
                  <td className="px-6 py-5 text-white">
                    {item.institution}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.degree}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.duration}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.grade}
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

              {educations.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-slate-400"
                  >
                    No education records found.
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

export default EducationPage;