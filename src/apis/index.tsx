import { Id } from '@/pages/Anamnesis/types';

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

  // Find the index of the form to update
  const index = anamnesisList.findIndex((form) => form.id === id);

  if (index === -1) {
    return 'Form not found';
  }

  // Update the form with new values
  anamnesisList[index] = { ...anamnesisList[index], ...updatedForm };

  // Save the updated list back to localStorage
  localStorage.setItem('anamnesis', JSON.stringify(anamnesisList));
  return 'Success';
};
