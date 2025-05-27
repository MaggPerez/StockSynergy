import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home'
import Stockroom from './pages/Stockroom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SalesFloor from './pages/SalesFloor';
import Restock from './pages/Restock';
import Analytics from './pages/Analytics';
import AddProduct from './pages/AddProduct';
import PageNotFound from './components/PageNotFound';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Settings from './pages/Settings';
import { SelectedItemsProvider } from './components/SelectedItems';

const router = createBrowserRouter([
  {
    path: '*',
    element: <PageNotFound />
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/logout',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/stockroom',
    element: <Stockroom />,
  },
  {
    path: '/restock',  // Fixed: added missing '/'
    element: <Restock />
  },
  {
    path: '/salesfloor',
    element: <SalesFloor />,
  },
  {
    path: '/analytics',
    element: <Analytics />
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/suppliers',
    element: <Suppliers />
  },
  {
    path: '/addproduct',
    element: <AddProduct />
  },
  {
    path: '/settings',
    element: <Settings />
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <SelectedItemsProvider>
      <RouterProvider router={router} />
    </SelectedItemsProvider>
  </StrictMode>
);
