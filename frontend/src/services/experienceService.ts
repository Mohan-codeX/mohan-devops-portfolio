import api from "../api/axios";

export interface Experience {
  id?: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const getExperiences = async (): Promise<Experience[]> => {
  const response = await api.get<Experience[]>("/experiences/");
  return response.data;
};

export const getExperience = async (
  id: number
): Promise<Experience> => {
  const response = await api.get<Experience>(
    `/experiences/${id}`
  );

  return response.data;
};

export const createExperience = async (
  experience: Experience
): Promise<Experience> => {
  const response = await api.post<Experience>(
    "/experiences/",
    experience
  );

  return response.data;
};

export const updateExperience = async (
  id: number,
  experience: Experience
): Promise<Experience> => {
  const response = await api.put<Experience>(
    `/experiences/${id}`,
    experience
  );

  return response.data;
};

export const deleteExperience = async (
  id: number
): Promise<void> => {
  await api.delete(`/experiences/${id}`);
};