import { ContainerType, FormType, Id } from '@/pages/CreateAnamnesis/types';

interface AnamnesisForm {
  id: Id;
  title: string;
  description: string;
  creationDate: string;
  containers: ContainerType[];
  forms: FormType[];
}

export default AnamnesisForm;
