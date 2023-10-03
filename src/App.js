import React, { useContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home/Home";
import urunler from "./hooks/useData";
import Search from "./components/search/Search";
import MainLayout from "./layout/MainLayout";

import MessiShop from "./ListeComponents/MessiShop/MessiShop";
import Details from "./Details/Details";

import { ProductContext } from "./context/ProductContext";
function App() {
  const { addProduct } = useContext(ProductContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/urunler", element: <MessiShop urunler={urunler} /> },
        { path: "/urunler/:id", element: <Details addProduct={addProduct} /> },
        { path: "/search", element: <Search /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
