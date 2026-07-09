import api from "../api/axios";

export interface Profile {
  id?: number;

  // Hero
  full_name: string;
  title: string;
  about: string;
  tagline: string;

  // Contact
  email: string;
  phone: string;
  location: string;

  // Social
  github: string;
  linkedin: string;
  website: string;

  // Assets
  profile_image: string;

  // About Section
  years_of_experience: number;
  projects_completed: number;
  certifications: number;

  // Resume CTA
  resume_title: string;
  resume_description: string;
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
