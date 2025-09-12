import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from './components/Login';
import Home from './pages/home/Home'
import ProfileLayout from './pages/profilePage/ProfileLayout'

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

            {
                path: "/profile",
                element: <ProfileLayout/>
            },
            
        ],
    }
])