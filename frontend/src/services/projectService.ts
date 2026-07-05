import api from "../api/axios";

export interface Project {
  id?: number;
  title: string;
  description: string;
  github_url: string;
  live_url: string;
  image_url: string;
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>("/projects/");
  return response.data;
};

export const createProject = async (
  project: Project
): Promise<Project> => {
  const response = await api.post<Project>(
    "/projects/",
    project
  );

  return response.data;
};

export const updateProject = async (
  id: number,
  project: Project
): Promise<Project> => {
  const response = await api.put<Project>(
    `/projects/${id}`,
    project
  );

  return response.data;
};

export const deleteProject = async (
  id: number
): Promise<void> => {
  await api.delete(`/projects/${id}`);
};