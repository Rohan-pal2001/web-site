import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <React.StrictMode>
    <RouterProvider  const router={router}/>
  </React.StrictMode>
  </HashRouter>
)
