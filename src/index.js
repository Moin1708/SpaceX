import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Home/Home';
import Rocket from './Rocket/Rocket';
import Launches from './Launches/Launches';
import Capsule from './Capsule/Capsule'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "rocket",
    element: <Rocket/>
  },
  {
    path: "launches",
    element: <Launches/>
  },
  {
    path: "capsule",
    element: <Capsule/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router} />

);


  


reportWebVitals();
