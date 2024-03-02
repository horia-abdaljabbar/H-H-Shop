import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root";
import Home from "./pages/Home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/Home",
          element: <Home />,

        }
      ]
    },
  ]);

  
  return (
    <>
    
    <RouterProvider router={router} />
    </>
  );
}

export default App;
