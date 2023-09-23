import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout.jsx'
import Home from './components/Pages/Home/Home.jsx'
import Favourite from './components/Pages/Favourite/favourite.jsx'
import Login from './components/Pages/Login/Login.jsx'
import PhoneCard from './components/Pages/Home/Phones/PhoneCard'
import SeeDetails from './components/SeeDetails/SeeDetails'
const myproject = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('../phones.json')
      },
      {
        path:'/favourite',
        element:<Favourite></Favourite>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/seeDetails',
        element:<SeeDetails></SeeDetails>
      }
      
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myproject}></RouterProvider>
  </React.StrictMode>,
)
