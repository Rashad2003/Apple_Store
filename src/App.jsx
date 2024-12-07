import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { ErrorPage } from "./pages/ErrorPage";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/products",
          element: <Products />
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
          path:"/productDetails/:id",
          element: <ProductDetails />
        },
        {
          path:"/cart",
          element: <Cart />
        },
      ],
    },     
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App
