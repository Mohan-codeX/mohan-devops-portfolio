import { useEffect, useState } from "react";
import { FiEdit, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
  type Skill,
} from "../../services/skillService";

const initialForm: Skill = {
  name: "",
  category: "",
  level: 80,
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<Skill>(initialForm);

  const loadSkills = async () => {
    try {
      setLoading(true);
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load skills.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setFormData(initialForm);
    setShowForm(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value,
    }));
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormData(initialForm);
    setShowForm(true);
  };

  const handleEdit = (skill: Skill) => {
    setEditingId(skill.id!);
    setFormData(skill);
    setShowForm(true);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.category.trim()) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setSaving(true);

      if (editingId !== null) {
        await updateSkill(editingId, formData);
        toast.success("Skill updated successfully.");
      } else {
        await createSkill(formData);
        toast.success("Skill created successfully.");
      }

      await loadSkills();
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Unable to save skill.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) {
      return;
    }

    try {
      await deleteSkill(id);
      toast.success("Skill deleted successfully.");
      await loadSkills();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete skill.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Skills</h1>
          <p className="mt-2 text-slate-400">
            Manage your portfolio skills.
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          <FiPlus />
          Add Skill
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {editingId ? "Edit Skill" : "Add Skill"}
            </h2>

            <button
              onClick={resetForm}
              className="rounded-lg bg-slate-800 p-2 text-slate-300 hover:bg-slate-700"
            >
              <FiX />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Skill
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Category
              </label>

              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Level (%)
              </label>

              <input
                type="number"
                min={0}
                max={100}
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-3 flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Skill"
                  : "Create Skill"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-slate-300">
                Skill
              </th>
              <th className="px-6 py-4 text-left text-sm text-slate-300">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm text-slate-300">
                Level
              </th>
              <th className="px-6 py-4 text-center text-sm text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-slate-400"
                >
                  Loading skills...
                </td>
              </tr>
            ) : skills.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-slate-400"
                >
                  No skills found.
                </td>
              </tr>
            ) : (
              skills.map((skill) => (
                <tr
                  key={skill.id}
                  className="border-t border-slate-800"
                >
                  <td className="px-6 py-5 text-white">
                    {skill.name}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {skill.category}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                      {skill.level}%
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(skill)}
                        className="rounded-lg bg-slate-800 p-2 text-yellow-400 hover:bg-slate-700"
                      >
                        <FiEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(skill.id!)}
                        className="rounded-lg bg-slate-800 p-2 text-red-400 hover:bg-slate-700"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
