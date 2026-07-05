import api from "../api/axios";

export interface Resume {
  id?: number;
  filename?: string;
  file_name?: string;
}

export const getResume = async (): Promise<Resume> => {
  const response = await api.get("/resume/");
  return response.data;
};

export const uploadResume = async (file: File): Promise<Resume> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const downloadResume = (): void => {
  window.open(
    `${import.meta.env.VITE_API_URL}/resume/download`,
    "_blank"
  );
};
