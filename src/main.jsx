import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header } from './components/allder.jsx'

//others stuff
import './style/index.css'
import App from './App.jsx'

//pages
import { Cart } from './pages/cart.jsx'
import { Home } from './pages/home.jsx'
import { Shop } from './pages/shop.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {path: "/", element: <Home name=" Suki ship"/>},
    {path: "/Shop", element: <Shop />},
    {path: "/Cart", element: <Cart/>}
  ]
}])

ReactDom.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
