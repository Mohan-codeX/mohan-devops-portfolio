import api from "../api/axios";

export interface Skill {
  id?: number;
  name: string;
  category: string;
  level: number;
}

export const skillsService = {
  async getAll(): Promise<Skill[]> {
    const response = await api.get<Skill[]>("/skills/");
    return response.data;
  },

  async create(skill: Skill): Promise<Skill> {
    const response = await api.post<Skill>("/skills/", skill);
    return response.data;
  },

  async update(id: number, skill: Skill): Promise<Skill> {
    const response = await api.put<Skill>(`/skills/${id}`, skill);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/skills/${id}`);
  },
};

/*
 * Backward compatibility.
 * Existing Admin pages still use these functions.
 */

export const getSkills = skillsService.getAll;
export const createSkill = skillsService.create;
export const updateSkill = skillsService.update;
export const deleteSkill = skillsService.delete;
