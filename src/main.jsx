import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Stockroom from './pages/Stockroom.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SalesFloor from './pages/SalesFloor.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/logout',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/stockroom',
    element: <Stockroom />
  },
  {
    path: '/salesfloor',
    element: <SalesFloor />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
