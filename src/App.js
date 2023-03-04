import logo from "./logo.svg";
import "./App.css";
import TotalComponents from "./Components/TotalComponents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <div>hi this is home page</div>,
        },
        {
          path: "/home",
          element: <div>hi this is home page</div>,
        },
        {
          path: "/home",
          element: <div>hi this is home page</div>,
        },
        {
          path: "/home",
          element: <div>hi this is home page</div>,
        },
      ],
    },
    {
      path: "",
      element: "",
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
