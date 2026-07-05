import api from "../api/axios";

export interface Profile {
  id?: number;
  full_name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
  profile_image: string;
}

export const getProfile = async (): Promise<Profile> => {
  const response = await api.get<Profile>("/profile/");
  return response.data;
};

export const createProfile = async (
  data: Profile
): Promise<Profile> => {
  const response = await api.post<Profile>(
    "/profile/",
    data
  );

  return response.data;
};

export const updateProfile = async (
  data: Profile
): Promise<Profile> => {
  const response = await api.put<Profile>(
    "/profile/",
    data
  );

  return response.data;
};