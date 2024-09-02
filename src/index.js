import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './views/home/home';
import Subjects from './views/subjects/subjects';
import English from './views/english/english';
import Unit1 from './views/unit1/unit1';
import Lesson from './views/lesson/lesson';
import Practice from './views/practice/practice';
import Dashboard from './views/dashboard/dashboard';
import Login from './views/login/login';
import Register from './views/register/register';
import Profile from './views/profile/profile';
import PracticeExam from './views/practiceexam/practiceexam';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/subjects',
        element: <Subjects></Subjects>
      },
      {
        path: '/english',
        element: <English></English>
      },
      {
        path: '/unit1',
        element: <Unit1></Unit1>
      },
      {
        path: '/lesson',
        element: <Lesson></Lesson>
      },
      {
        path: '/practice',
        element: <Practice></Practice>
      },
      {
        path:'/practiceexam',
        element:<PracticeExam></PracticeExam>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
