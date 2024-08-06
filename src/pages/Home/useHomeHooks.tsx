import { deleteAnamnesis, getAnamnesisFormList } from '@/apis';

import { useEffect, useState } from 'react';

import AnamnesisForm from '@/types/AnamnesisForm';

import { Id } from '../CreateAnamnesis/types';

const useHomeHooks = () => {
  const [data, setData] = useState<AnamnesisForm[] | undefined>();

  const fetchAnamnesisData = async () => {
    const data = await getAnamnesisFormList();

    setData(data);
  };

  useEffect(() => {
    fetchAnamnesisData();
  }, []);

  const handleDeleteAnamnesis = async (id: Id) => {
    await deleteAnamnesis(id);
    await fetchAnamnesisData();
  };

  return {
    data,
    handleDeleteAnamnesis,
  };
};

export default useHomeHooks;
