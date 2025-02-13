import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginForm from './LoginForm.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/logout',
    element: <LoginForm />
  },
  {
    path: '/home',
    element: <Home />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
