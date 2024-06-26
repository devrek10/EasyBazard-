/* 
------------------Explication du code --------------------

-1 L'importion de certains dependances de differentes librairies tel que 
     Route, createRouteFromElements de react-router-dom ect...

-2 Cette étape consiste a creer un objet router a partir de la methode createBrowserRouter
   afin de creer des routes dynamiquement

3- 




*/

import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import Shop from "./pages/shop.jsx";
import AdminDashboard from "./pages/admin/adminDashboard.jsx";
import AdminRoute from "./pages/admin/adminRoute.jsx";
import AllProducts from "./pages/admin/allProducts.jsx";
import ProductList from "./pages/admin/productList.jsx";
import CategoryList from "./pages/admin/categoryList.jsx";
import ProductUpdate from "./pages/admin/productUpdate.jsx";
import UserList from "./pages/admin/userList.jsx";
import Profile from "./pages/user/profile.jsx"
import PrivateRoute from "./components/privateRoute.jsx";
import ProductDetails from "./products/productDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />


      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>


      <Route path="/admin" element={<AdminRoute />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="userlist" element={<UserList />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
