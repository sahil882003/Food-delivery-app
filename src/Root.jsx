import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
