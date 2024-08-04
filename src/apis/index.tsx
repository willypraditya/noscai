import AnamnesisForm from '@/types/AnamnesisForm';

export const getAnamnesisFormList = (): AnamnesisForm[] => {
  return [
    {
      id: '1',
      title: 'General Health Form',
      description: 'A comprehensive form covering general health questions.',
      creationDate: '2024-07-01',
    },
    {
      id: '2',
      title: 'Pediatric Health Form',
      description: 'Health form tailored for pediatric patients.',
      creationDate: '2024-07-05',
    },
    {
      id: '3',
      title: 'Mental Health Assessment',
      description: 'Form focusing on mental health evaluation.',
      creationDate: '2024-07-10',
    },
    {
      id: '4',
      title: 'Cardiology Questionnaire',
      description: 'Form for patients with cardiovascular issues.',
      creationDate: '2024-07-15',
    },
    {
      id: '5',
      title: 'Orthopedic Evaluation',
      description: 'Assessment form for orthopedic conditions.',
      creationDate: '2024-07-20',
    },
  ];
};
