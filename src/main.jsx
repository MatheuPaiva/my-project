import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Depec from './pages/Depec.jsx';
import Depet from './pages/Depet.jsx';
import Depex from './pages/Depex.jsx';
import Derint from './pages/Derint.jsx';
import Diacon from './pages/Diacon.jsx';
import Diemi from './pages/Diemi.jsx';
import Dipet from './pages/Dipet.jsx';
import Dipin from './pages/Dipin.jsx';


import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/Depec",
        element:<Depec/>
      },
      {
        path:"/Depet",
        element:<Depet/>
      },
      {
        path:"/Depex",
        element:<Depex/>
      },
      {
        path:"/Derint",
        element:<Derint/>
      },
      {
        path:"/Dipet",
        element:<Dipet/>
      },
      {
        path:"/Diacon",
        element:<Diacon/>
      },
      {
        path:"/Dipin",
        element:<Dipin/>
      },
      {
        path:"/Diemi",
        element:<Diemi/>
      },


  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
