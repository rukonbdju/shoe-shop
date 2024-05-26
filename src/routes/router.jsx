import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/Mainlayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductsDashboard from "../components/Dashboard/Products";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Error from "../pages/Error/Error";
import Profile from "../components/Dashboard/Profile";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'',
                element:<Profile></Profile>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'products',
                element:<ProductsDashboard></ProductsDashboard>
            },
        ]
    }
])
export default router;