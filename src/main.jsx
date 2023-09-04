import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index from './pages/Index'


const router = createBrowserRouter([
  {
    path: '/',
    // Define el layout general
    element: <Layout />,
    children: [
      // Define el contenido como index, es decir, lo que se renderizará en el layout directamente
      {
        index: true,
        element: <Index />
      },
      // Define una page especifica
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
