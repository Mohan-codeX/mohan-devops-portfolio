import api from "../api/axios";

export interface Skill {
  id?: number;
  name: string;
  category: string;
  level: number;
}

export const getSkills = async (): Promise<Skill[]> => {
  const response = await api.get<Skill[]>("/skills/");
  return response.data;
};

export const createSkill = async (
  skill: Skill
): Promise<Skill> => {
  const response = await api.post<Skill>(
    "/skills/",
    skill
  );
  return response.data;
};

export const updateSkill = async (
  id: number,
  skill: Skill
): Promise<Skill> => {
  const response = await api.put<Skill>(
    `/skills/${id}`,
    skill
  );
  return response.data;
};

export const deleteSkill = async (
  id: number
): Promise<void> => {
  await api.delete(`/skills/${id}`);
};