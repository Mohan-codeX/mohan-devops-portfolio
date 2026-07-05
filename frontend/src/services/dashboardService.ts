import api from "../api/axios";

export interface DashboardStats {
  users: number;
  projects: number;
  skills: number;
  experiences: number;
  educations: number;
  contacts: number;
  unread_contacts: number;
  visitors: number;
}

export const getDashboardStats =
  async (): Promise<DashboardStats> => {
    const response =
      await api.get<DashboardStats>(
        "/dashboard/stats"
      );

    return response.data;
  };