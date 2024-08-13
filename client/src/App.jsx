import "./App.css";
import RouterSetup from "./RouterSetup";
import StarsCanvas from "./components/Animation/StarsCanvas";



function App() {
  return (
    <>
    <StarsCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <RouterSetup />
      </div>
    </>
  );
}

export default App;

// import './App.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
// import AllAdmins from './pages/Admin_afterlogin/All_admins'

// import ProtectedRoute from './components/routes/ProtectedRoute.tsx';

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
//     // element: <Userafterlogin/>,
//     element: <ProtectedRoute component={Userafterlogin} />,

//   },

//   {
//     path: "/aafterlogin",
//     element: <Adminafterlogin/>,

//   },
//   {
//     path: "/alluser",
//     element: <Alluser />,

//   },
//   {
//     path: "/alladmins",
//     element: <AllAdmins />,

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

// export default App;

// function App() {
//   const [user, setUser] = useState();

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       <RouterProvider router={router} />
//     </UserContext.Provider>
//   );
// }

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route
//           path="/protected"
//           element={<ProtectedRoute component={ProtectedPage} />}
//         />
//         Other routes
//       </Routes>
//     </Router>
//   );
// };

// export default App;
