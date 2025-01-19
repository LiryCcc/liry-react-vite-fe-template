import '@/i18n';
import '@/index.css';
import rootRoutes from '@/routers';
import store from '@/store';
import 'normalize.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={rootRoutes} />
    </Provider>
  );
};

export default App;
