import { AuthProvider } from "./components/Auth/AuthContext.tsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./navbar/Navogation";
// import Login from "./pages/Login";
// import Signup from "./pages/Singup.jsx";
// import Book from "./pages/Admin_afterlogin/Add_book";
// import ALogin from "./pages/Admin_login";
// import ASignup from "./pages/Admin_signup";
// import Uupdate from "./pages/User_afterlogin/Update_user";
// import Aupdate from "./pages/Admin_afterlogin/Update_admin.jsx";
// import Userafterlogin from "./pages/User_afterlogin/User-afterlogin";
// import Vbook from "./pages/Admin_afterlogin/BooksTable";
// import Alluser from "./pages/Admin_afterlogin/All_users";
// import Bookupdate from "./pages/Admin_afterlogin/Bookupdate";
// import Adminafterlogin from "./pages/Admin_afterlogin/Admin-afterlog";
// import Allbooks from "./pages/Books";
// import AllAdmins from "./pages/Admin_afterlogin/All_admins";

//testing
// import UUpdate from "./redux/Test/Updateuser.jsx";
// import Tlogin from "./redux/Test/testlogin.jsx";

//ProtectedRoute
// import NewProtectedRoute from "./redux/routes/Testprotect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nav",
    element: <NavBar />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/alogin",
  //   element: <ALogin />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  // {
  //   path: "/asignup",
  //   element: <ASignup />,
  // },
  // // {
  // //   path: "/uupdate",
  // //   element: <Uupdate />,
  // // },
  // {
  //   path: "/aupdate",
  //   element: <Aupdate />,
  // },
  // {
  //   path: "/uafterlogin",
  //   element: (
  //     <NewProtectedRoute>
  //       <Userafterlogin />
  //     </NewProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/aafterlogin",
  //   element: <Adminafterlogin />,
  // },
  // {
  //   path: "/alluser",
  //   element: <Alluser />,
  // },
  // {
  //   path: "/alladmins",
  //   element: <AllAdmins />,
  // },
  // {
  //   path: "/addbook",
  //   element: <Book />,
  // },
  // {
  //   path: "/vbooks",
  //   element: <Vbook />,
  // },
  // {
  //   path: "/bupdate",
  //   element: <Bookupdate />,
  // },
  // {
  //   path: "/allbooks",
  //   element: <Allbooks />,
  // },
  // {
  //   path: "/tuu",
  //   element: <UUpdate />,
  // },
  // {
  //   path: "/tl",
  //   element: <Tlogin />,
  // },
]);

const RouterSetup = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default RouterSetup;
