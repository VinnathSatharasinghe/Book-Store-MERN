import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";
import UserNavBar from "./pages/User_afterlogin/user_navbar";
import Login from './pages/Login';
import Signup from './pages/Singup';
import Book from './pages/Admin_afterlogin/Add_book';
import ALogin from './pages/admin_login';
import ASignup from './pages/Admin_signup';
import Uupdate from './pages/User_afterlogin/update_user';
import Userafterlogin from './pages/User_afterlogin/user-afterlogin';
import Vbook from './pages/Admin_afterlogin/BooksTable'
import Alluser from './pages/Admin_afterlogin/All_users'

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
    path: "/unav",
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
    path: "/uafterlogin",
    element: <Userafterlogin/>,

  },

  {
    path: "/addbook",
    element: <Book />,

  },
  {
    path: "/vbook",
    element: <Vbook />,

  },
  {
    path: "/auser",
    element: <Alluser />,

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
