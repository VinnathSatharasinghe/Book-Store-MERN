import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nav",
    element: <NavBar />,

  }

]);


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App
