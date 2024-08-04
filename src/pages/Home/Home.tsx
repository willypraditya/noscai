import { getAnamnesisFormList } from '@/apis';

import Layout from '@/components/Layout/Layout';
import Table from '@/components/Table/Table';

import columns from './columns';

const Home = () => {
  return (
    <Layout>
      <Table data={getAnamnesisFormList()} columns={columns} />
    </Layout>
  );
};

export default Home;
