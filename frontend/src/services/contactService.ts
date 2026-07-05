import api from "../api/axios";

export interface Contact {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read?: boolean;
}

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get<Contact[]>("/contacts/");
  return response.data;
};

export const getContact = async (
  id: number
): Promise<Contact> => {
  const response = await api.get<Contact>(
    `/contacts/${id}`
  );

  return response.data;
};

export const createContact = async (
  contact: Contact
): Promise<Contact> => {
  const response = await api.post<Contact>(
    "/contacts/",
    contact
  );

  return response.data;
};

export const updateContact = async (
  id: number,
  contact: Contact
): Promise<Contact> => {
  const response = await api.put<Contact>(
    `/contacts/${id}`,
    contact
  );

  return response.data;
};

export const deleteContact = async (
  id: number
): Promise<void> => {
  await api.delete(`/contacts/${id}`);
};