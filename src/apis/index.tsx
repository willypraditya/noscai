import { Id } from '@/pages/CreateAnamnesis/types';

import AnamnesisForm from '@/types/AnamnesisForm';

export const getAnamnesisFormList = (): AnamnesisForm[] => {
  const anamnesis = localStorage.getItem('anamnesis');
  return anamnesis ? JSON.parse(anamnesis) : [];
};

export const getAnamnesisById = (id: Id): AnamnesisForm | null => {
  const anamnesisList = getAnamnesisFormList();
  return anamnesisList.find((form) => form.id === id) || null;
};

export const createAnamnesis = (form: AnamnesisForm): string => {
  const anamnesisList = getAnamnesisFormList();
  anamnesisList.push(form);
  localStorage.setItem('anamnesis', JSON.stringify(anamnesisList));
  return 'Success';
};

export const updateAnamnesis = (
  id: Id,
  updatedForm: Partial<AnamnesisForm>,
): string => {
  const anamnesisList = getAnamnesisFormList();

  const index = anamnesisList.findIndex((form) => form.id === id);

  if (index === -1) {
    return 'Form not found';
  }

  anamnesisList[index] = { ...anamnesisList[index], ...updatedForm };

  localStorage.setItem('anamnesis', JSON.stringify(anamnesisList));
  return 'Success';
};

export const deleteAnamnesis = (id: Id): string => {
  const anamnesisList = getAnamnesisFormList();

  const filteredList = anamnesisList.filter((form) => form.id !== id);

  localStorage.setItem('anamnesis', JSON.stringify(filteredList));
  return 'Success';
};
