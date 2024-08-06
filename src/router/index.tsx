import { createBrowserRouter } from 'react-router-dom';

import Anamnesis from '@/pages/CreateAnamnesis/Anamnesis';
import Home from '@/pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <Anamnesis />,
  },
  {
    path: '/view/:id',
    element: <Anamnesis isView={true} />,
  },
  {
    path: '/edit/:id',
    element: <Anamnesis isEdit={true} />,
  },
]);

export default router;
