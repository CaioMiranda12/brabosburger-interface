import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <MyRoutes />
    </AppProvider>
    <ToastContainer autoClose={1000} theme="colored" pauseOnHover={false} />
    <GlobalStyles />
  </>,
);
