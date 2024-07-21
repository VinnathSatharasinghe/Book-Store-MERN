import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";


const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },

]);


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App
