import { lazy } from 'react';
import { RouteObject } from 'react-router';

const EnvExample = lazy(() => import('@/pages/examples/env'));
const I18nExample = lazy(() => import('@/pages/examples/i18n'));

const exampleRoutes: RouteObject[] = [
  {
    path: 'i18n',
    element: <I18nExample />
  },
  {
    path: 'env',
    element: <EnvExample />
  }
];

export default exampleRoutes;
