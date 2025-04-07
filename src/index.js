import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import DashboardLayout from "./components/dashboard";
import StdLogin from './components/login';
import Layout from './components/layout';
import Register from './components/register';
import SchoolAppBar from './components/layout';
const router=createBrowserRouter([
  {path:'/',element:<DashboardLayout/>},
  {path:'/dashboard',element:<Layout/>},
  { path:'/login',element:<StdLogin/> },
  { path:'/register', element:<Register/>}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StrictMode>
      <SchoolAppBar/>
      <RouterProvider router={router}/>
    </StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
