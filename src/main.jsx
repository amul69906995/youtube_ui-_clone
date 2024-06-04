import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './component/Home';
import './css/main.css'
import Dictaphone from './component/Dictaphone';
import Watch from './component/Watch';
import Searchquery from './component/Searchquery';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Dictaphone",
        element: <Dictaphone />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/search",
        element: <Searchquery/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  ,
)
