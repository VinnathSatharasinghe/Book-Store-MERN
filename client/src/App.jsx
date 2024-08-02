import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";
import UserNavBar from "./pages/User_afterlogin/User_navbar";
import Login from './pages/Login';
import Signup from './pages/Singup';
import Book from './pages/Admin_afterlogin/Add_book';
import ALogin from './pages/Admin_login';
import ASignup from './pages/Admin_signup';
import Uupdate from './pages/User_afterlogin/Update_user';
import Userafterlogin from './pages/User_afterlogin/User-afterlogin';
import Vbook from './pages/Admin_afterlogin/BooksTable'
import Alluser from './pages/Admin_afterlogin/All_users'
import Bookupdate from './pages/Admin_afterlogin/Bookupdate';
import Adminafterlogin from './pages/Admin_afterlogin/Admin-afterlog';

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
    path: "/aafterlogin",
    element: <Adminafterlogin/>,

  },

  {
    path: "/addbook",
    element: <Book />,

  },
  {
    path: "/vbooks",
    element: <Vbook />,

  },
  {
    path: "/bupdate",
    element: <Bookupdate />,

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
