import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FC } from 'react';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound';
import FormPage from './pages/FormPage';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
