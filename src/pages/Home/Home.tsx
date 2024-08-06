import { getAnamnesisFormList } from '@/apis';

import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import Table from '@/components/Table/Table';

import columns from './columns';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Table data={getAnamnesisFormList()} columns={columns(navigate)} />
    </Layout>
  );
};

export default Home;
