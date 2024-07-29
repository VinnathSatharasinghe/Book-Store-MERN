import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";
import Login from './pages/Login';
import Signup from './pages/Singup';
import Book from './pages/Add_book';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nav",
    element: <NavBar />,

  },
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/signup",
    element: <Signup />,

  },
  {
    path: "/addbook",
    element: <Book />,

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
