

import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import PrivateRoute from './components/Route Protection/PrivateRoute.js';
// import AdminRoute from './components/Route Protection/AdminRoute.js';
import AdminRoute from './components/routes/AdminRoute.js';
import { AuthProvider } from './components/Auth/AuthContext.js';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Singup.jsx'));
// const Userafterlogin = lazy(() => import('./pages/User_afterlogin/User-afterlogin'));
const Adminafterlogin = lazy(() => import('./pages/Admin_afterlogin/Admin-afterlog'));
// const AddBook = lazy(() => import('./pages/Admin_afterlogin/Add_book'));
// const BooksTable = lazy(() => import('./pages/Admin_afterlogin/BooksTable'));
// const BookUpdate = lazy(() => import('./pages/Admin_afterlogin/Bookupdate'));
const AllBooks = lazy(() => import('./pages/Books'));
// const AllUsers = lazy(() => import('./pages/Admin_afterlogin/All_users'));
// const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// // Simulated authentication status
// const isAuthenticated = true;
// const isAdmin = true; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
  },
  // {
  //   path: "/uafterlogin",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <PrivateRoute element={<Userafterlogin />} isAuthenticated={isAuthenticated} />
  //     </Suspense>
  //   ),
  // },
  {
    path: "/aafterlogin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AdminRoute element={<Adminafterlogin />} />
      </Suspense>
    ),
  },
  // {
  //   path: "/addbook",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <AdminRoute element={<AddBook />} isAdmin={isAdmin} />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/vbooks",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <AdminRoute element={<BooksTable />} isAdmin={isAdmin} />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/bupdate",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <AdminRoute element={<BookUpdate />} isAdmin={isAdmin} />
  //     </Suspense>
  //   ),
  // },
  {
    path: "/allbooks",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AllBooks />
      </Suspense>
    ),
  },
  // {
  //   path: "/auser",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <AdminRoute element={<AllUsers />} isAdmin={isAdmin} />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "*",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <NotFound />
  //     </Suspense>
  //   ),
  // },
]);

function App() {
  return (
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;






















// import './App.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import NavBar from "./navbar/Navogation";
// import UserNavBar from "./pages/User_afterlogin/User_navbar";
// import Login from './pages/Login';
// import Signup from './pages/Singup';
// import Book from './pages/Admin_afterlogin/Add_book';
// import ALogin from './pages/Admin_login';
// import ASignup from './pages/Admin_signup';
// import Uupdate from './pages/User_afterlogin/Update_user';
// import Userafterlogin from './pages/User_afterlogin/User-afterlogin';
// import Vbook from './pages/Admin_afterlogin/BooksTable'
// import Alluser from './pages/Admin_afterlogin/All_users'
// import Bookupdate from './pages/Admin_afterlogin/Bookupdate';
// import Adminafterlogin from './pages/Admin_afterlogin/Admin-afterlog';
// import Allbooks from './pages/Books';
// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/nav",
//     element: <NavBar />,

//   },
//   {
//     path: "/unav",
//     element: <UserNavBar />,

//   },
//   {
//     path: "/login",
//     element: <Login />,

//   },
//   {
//     path: "/alogin",
//     element: <ALogin />,

//   },
//   {
//     path: "/signup",
//     element: <Signup />,

//   },
//   {
//     path: "/asignup",
//     element: <ASignup />,

//   },
//   {
//     path: "/uupdate",
//     element: <Uupdate />,

//   },
//   {
//     path: "/uafterlogin",
//     element: <Userafterlogin/>,

//   },

//   {
//     path: "/aafterlogin",
//     element: <Adminafterlogin/>,

//   },
//   {
//     path: "/auser",
//     element: <Alluser />,

//   },
//   {
//     path: "/addbook",
//     element: <Book />,

//   },
//   {
//     path: "/vbooks",
//     element: <Vbook />,

//   },
//   {
//     path: "/bupdate",
//     element: <Bookupdate />,

//   },
//   {
//     path: "/allbooks",
//     element: <Allbooks />,

//   },


// ]);


// function App() {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

// export default App

