import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router';
import exampleRoutes from './examples';

const Layout = lazy(() => import('@/pages/layout'));
const Login = lazy(() => import('@/pages/login'));
const Home = lazy(() => import('@/pages/home'));
const Examples = lazy(() => import('@/pages/examples'));
const NotFound = lazy(() => import('@/pages/not-found'));

const rootRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/examples', element: <Examples />, children: exampleRoutes },
      { path: '/home', element: <Home /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: <NotFound />
  }
];

const router = createBrowserRouter(rootRoutes);

export default router;
