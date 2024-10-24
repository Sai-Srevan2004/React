import React from 'react'

import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import AppLayout from './AppLayout.jsx'

import {RouterProvider ,createBrowserRouter}from 'react-router-dom'


const App = () => {
  const router=createBrowserRouter([
    {path:'/', element:<AppLayout/>,children:[
          {path:'/',element:<Home/>},
          {path:'/about',element:<About/>},
          {path:'/contact',element:<Contact/>}
    ]}
  ])
  return <RouterProvider router={router}/>
}

export default App
