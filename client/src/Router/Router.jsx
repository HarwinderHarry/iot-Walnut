import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import LayoutMain from '../components/Main/LayoutMain';
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from '../pages/auth/Profile';
import Manageadmin from '../pages/Manageadmin';
import Changepassword from '../pages/auth/Changepassword';
import Categories from '../pages/Categories';
import Fleets from '../pages/Fleets';
import Devices from '../pages/Devices';
import Manageusers from '../pages/users/Manageusers';
import Userfleets from '../pages/users/Userfleets';

const routerAdmin = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<LayoutMain />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/manageadmin" element={<Manageadmin />}></Route>
        <Route path="/manageusers" element={<Manageusers />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/fleets" element={<Fleets />}></Route>
        <Route path="/userfleets" element={<Userfleets />}></Route>
        <Route path="/devices" element={<Devices />}></Route>
        <Route path="/changepassword" element={<Changepassword />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

      </Route>
    )
  );

const Router = () => {
  return (
    <div>
    <RouterProvider router={routerAdmin} />
  </div>
  )
}

export default Router;