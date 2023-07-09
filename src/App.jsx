import React from "react";



import Home from './Screens/Home';
import Login from './Screens/Login';

import Root from "./Root";
import SignUp from "./Screens/SignUp";
import Myorders from "./Screens/Myorders";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Root />
        ),
        children: [
            {
                index: true,
                element: (
                    <div>
                       
                       <Home/>
                       

                    </div>
                )
            },
            {
                path: '/home',
                element: (
                    <div>
                      
                       <Home/>
                       

                    </div>
                )
            },
            {
                path: '/login',
                element: (
                    <div>
                         
                        <Login />


                    </div>
                )
            },
            {
                path:'/createuser',
                element:<SignUp />
            },
            {
                path:'/myorders',
                element:<Myorders/>
            }
        ]
    },

]);

function App() {
    
    return (
        <div>
            <RouterProvider router={router} /> 
            {/* <Footer /> */}
           
        </div>
    )
}

export default App;