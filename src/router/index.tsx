import { createBrowserRouter } from 'react-router-dom';

import CreateAnamnesis from '@/pages/CreateAnamnesis/CreateAnamnesis';
import Home from '@/pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateAnamnesis />,
  },
]);

export default router;
