import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import Table from '@/components/Table/Table';

import columns from './columns';
import useHomeHooks from './useHomeHooks';

const Home = () => {
  const navigate = useNavigate();

  const { data, handleDeleteAnamnesis } = useHomeHooks();

  return (
    <Layout>
      <Table
        data={data || []}
        columns={columns(navigate, handleDeleteAnamnesis)}
      />
    </Layout>
  );
};

export default Home;
