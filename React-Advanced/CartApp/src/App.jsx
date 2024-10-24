import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Error from './Components/Error'

const router=createBrowserRouter([
  {path:'/',element:<AppLayout/>,children:[
    {path:'/',element:<Home/>}
    ,{path:'/cart',element:<Cart/>}
  ],errorElement:<Error/>}
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
