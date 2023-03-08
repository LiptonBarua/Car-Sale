import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Categorys from "../../Pages/Category/Categorys"; 
import SignUp from "../../Pages/SignUp/SignUp";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Bookings from "../../Dashboard/BookingCollection/Bookings";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AdminRouter from "../AdminRouter/AdminRouter";
import AllUser from "../../Dashboard/AllUser/AllUser";
import DefaultPage from "../../Pages/DefaultPage/DefaultPage";
import Payment from "../../Dashboard/Payment/Payment";
import SellerRouter from "../SellerRouter/SellerRouter";
import BuyerRouter from "../BuyerRouter/BuyerRouter";

const router=createBrowserRouter([
{
    path: '/', element: <Main></Main>, 
    errorElement: <DefaultPage></DefaultPage>,
    children:[
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/product/:brand', 
         
            element: <PrivateRouter><Categorys></Categorys></PrivateRouter>,
            loader: ({params})=>fetch(`https://server12.vercel.app/product/${params.brand}`)
        },
        {
            path: '/blog', element: <PrivateRouter><Blog></Blog></PrivateRouter>
        },
    
        {
         path: '/login', element: <Login></Login>
        },
        {
         path: '/signUp', element: <SignUp></SignUp>
        }
    ]
},
{
    path: '/dashboard', element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
     errorElement: <DefaultPage></DefaultPage>,
     children: [
        {
            path: '/dashboard', element: <PrivateRouter><Bookings></Bookings></PrivateRouter>
        },
        {
            path: '/dashboard/myProducts', element: <SellerRouter><MyProducts></MyProducts></SellerRouter>
         },
        {
            path: '/dashboard/addProduct', element: <SellerRouter><AddProduct></AddProduct></SellerRouter>
        },
        {
            path: '/dashboard/allSeller', index:true, element: <PrivateRouter><AdminRouter><AllUser></AllUser></AdminRouter></PrivateRouter>
        },
        {
            path: '/dashboard/payments/:id', 
            element: <Payment></Payment>,
            loader: ({params})=>fetch(`https://server12.vercel.app/booking/${params.id}`)
        }
    ]
},

])

export default router;
