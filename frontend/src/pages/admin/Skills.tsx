import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

const skills = [
  {
    id: 1,
    name: "Docker",
    category: "DevOps",
    level: "Advanced",
  },
  {
    id: 2,
    name: "Kubernetes",
    category: "Cloud",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "AWS",
    category: "Cloud",
    level: "Advanced",
  },
  {
    id: 4,
    name: "Linux",
    category: "Operating System",
    level: "Advanced",
  },
];

const Skills = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Skills
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your portfolio skills.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
          <FiPlus />
          Add Skill
        </button>
      </div>

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
            {skills.map((skill) => (
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
                    {skill.level}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <button className="rounded-lg bg-slate-800 p-2 text-yellow-400 hover:bg-slate-700">
                      <FiEdit />
                    </button>

                    <button className="rounded-lg bg-slate-800 p-2 text-red-400 hover:bg-slate-700">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;