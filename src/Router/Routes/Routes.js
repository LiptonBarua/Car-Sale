import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Category/Categorys";
import SignUp from "../../Pages/SignUp/SignUp";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Bookings from "../../Dashboard/BookingCollection/Bookings";
import AllSellerAndBuyer from "../../Dashboard/AllSellerAndBuyer/AllSellerAndBuyer";

const router=createBrowserRouter([
{
    path: '/', element: <Main></Main>, children:[
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/product/:brand', 
            element: <Products></Products>,
            loader: ({params})=>fetch(`http://localhost:8000/product/${params.brand}`)

        },
        {
            path: '/blog', element: <Blog></Blog>
        },
        {
           path: '/myProducts', element: <MyProducts></MyProducts>
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
    path: '/', element: <DashboardLayout></DashboardLayout>,children: [
        {
            path: '/dashboard', element: <Bookings></Bookings>
        },
        {
            path: '/addProduct', element: <AddProduct></AddProduct>
        },
        {
            path: '/allSeller', element: <AllSellerAndBuyer></AllSellerAndBuyer>
        },
      
    ]
}
])

export default router;
