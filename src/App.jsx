import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import ProductsForCategory from "./pages/ProductsForCategory/ProductsForCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/Categories",
          element: <Categories />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Register",
          element: <Register />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/Products",
          element: <Products />,
        },

        {
          path: "/ProductsForCategory/:categoryId",
          element: <ProductsForCategory />,
        },
        {
          path: "*",
          element: (
            <NotFound>
              <div className="errorMsg">
                <span>404</span>
                <span>Page Not Found</span>
                <span>Please Check The Address And Try Again</span>
              </div>
            </NotFound>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
