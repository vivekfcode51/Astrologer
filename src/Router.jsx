import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from './components/Login';
import Home from './pages/home/Home'
import Signup from './components/SignUp';

const Router = createBrowserRouter

export default Router([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/Signup",
                element: <Signup/>
            }
        ]
    }
])