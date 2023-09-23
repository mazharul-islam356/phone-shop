import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout.jsx'
import Home from './components/Pages/Home/Home.jsx'
import Favourite from './components/Pages/Favourite/favourite.jsx'
import Login from './components/Pages/Login/Login.jsx'
const myproject = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/favourite',
        element:<Favourite></Favourite>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myproject}></RouterProvider>
  </React.StrictMode>,
)
