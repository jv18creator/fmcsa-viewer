import { createTheme, ThemeProvider } from '@mui/material';
import Viewer from './components/Viewer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        main: '#1C6DA6',
      },
      secondary: {
        main: '#15396C',
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Viewer />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
