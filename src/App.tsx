import Home from "./pages/home/Home"
import User from "./pages/users/User";
import Product from "./pages/products/Product";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import User1 from "./pages/user/User1";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./Login/Login";
import './styles/global.scss'
import Product1 from "./pages/product/Product1";



function App() {
  // App.tsx
const Layout=()=>{
  return(<div className="main">
    <Navbar></Navbar>
    <div className="container">
      <div className="menucontainer"><Menu></Menu></div>
      <div className="contentcontainer">
      
      <Outlet></Outlet>
      
        
       </div>

    </div>
    <Footer></Footer>
  </div>
)}
  
const router = createBrowserRouter([
 {
  path:"/",
  element:<Layout></Layout>,
  children:[

    {
      path: "/",
      element: (
        <Home></Home>
      ),
    },
    {
      path: "/users",
      element: <User></User>,
    },
    {
      path: "/products",
      element: <Product></Product>,
    },
    {
      path: "/users/:id",
      element: <User1></User1>,
    },
    {
      path: "/product/:id",
      element: <Product1></Product1>,
    },

  ],
 },
 {path:"login",
 element:<Login></Login>
 },
 
 
 
 
]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
