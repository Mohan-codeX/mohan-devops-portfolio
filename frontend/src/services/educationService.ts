import api from "../api/axios";

export interface Education {
  id?: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

export const getEducations = async (): Promise<Education[]> => {
  const response = await api.get<Education[]>("/educations/");
  return response.data;
};

export const getEducation = async (
  id: number
): Promise<Education> => {
  const response = await api.get<Education>(
    `/educations/${id}`
  );

  return response.data;
};

export const createEducation = async (
  education: Education
): Promise<Education> => {
  const response = await api.post<Education>(
    "/educations/",
    education
  );

  return response.data;
};

export const updateEducation = async (
  id: number,
  education: Education
): Promise<Education> => {
  const response = await api.put<Education>(
    `/educations/${id}`,
    education
  );

  return response.data;
};

export const deleteEducation = async (
  id: number
): Promise<void> => {
  await api.delete(`/educations/${id}`);
};