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


const router = createBrowserRouter([
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
    path: 'restock',
    element: <Restock />
  },
  {
    path: '/salesfloor',
    element: <SalesFloor />,
  },
  {
    path: '/analytics',
    element: <Analytics />
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);