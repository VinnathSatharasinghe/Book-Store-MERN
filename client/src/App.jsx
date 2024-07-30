import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";
import UserNavBar from "./User_afterlogin/user_navbar";
import Login from './pages/Login';
import Signup from './pages/Singup';
import Book from './pages/Add_book';
import ALogin from './pages/admin_login';
import ASignup from './pages/Admin_signup';
import Uupdate from './pages/update_user';


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
    path: "/usernav",
    element: <UserNavBar />,

  },
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/alogin",
    element: <ALogin />,

  },
  {
    path: "/signup",
    element: <Signup />,

  },
  {
    path: "/asignup",
    element: <ASignup />,

  },
  {
    path: "/uupdate",
    element: <Uupdate />,

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
