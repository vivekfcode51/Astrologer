import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from './components/Login';
import Home from './pages/home/Home'

const Router = createBrowserRouter

export default Router([
    {
        path: "/login",
        element: <Login />
    },

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            
        ],
    }
])