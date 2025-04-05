import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Layout from './components/layout';
import Login from './components/login';
import Register from './components/register';

const router=createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/dashboard',element:<Layout/>},
  { path:'/login',element:<Login/> },
  { path:'/register', element:<Register/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
