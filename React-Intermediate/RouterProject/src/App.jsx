import React, { useState } from 'react'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Home from './Pages/Home.jsx'
import AppLayout from './AppLayout.jsx'
import ErrorComponent from './Components/ErrorComponent.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'

const App = () => {

   const [isLoggedIn,setIsLoggedIn]=useState(false)

const router=createBrowserRouter([
   {path:'/',errorElement:<ErrorComponent/>,element:<AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login  setIsLoggedIn={setIsLoggedIn} />},
      {path:'/signup',element:<SignUp setIsLoggedIn={setIsLoggedIn} />},
      {path:'/dashboard',element:<Dashboard/>}
   ]}
])



    return <RouterProvider router={router}/>
}

export default App;
