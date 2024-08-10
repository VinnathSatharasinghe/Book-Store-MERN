import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Usernav from './User_navbar';

function Afterlogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, _email, _address } = location.state || {};

  // const handleUpdateUser = () => {
  //   navigate("/uupdate", { state: { id, name, _email, _address } });
  // };

  const handleUpdateUser = () => {
    navigate("/tuu", { state: { id, name, _email, _address } });
  };

  const handleAllUser = () => {
    navigate("/alluser", { state: { id, name, _email, _address } });
  };

  return (
    <div>
      <Usernav />
      <h1>Welcome, {name}</h1>
      <p>Email: {_email}</p>
      <p>Address: {_address}</p>
      <Button variant="primary" type="login" onClick={handleUpdateUser}>Update User Info</Button>
      <br />
      <Button variant="primary" type="login" onClick={handleAllUser}>All User Info</Button>
    </div>
  );
}

export default Afterlogin;

// function Afterlogin() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { id, name, _email, _address } = location.state || {};

//   console.log("Location State:", location.state); // Check if state is correctly received

//   const handleUpdateUser = () => {
//     navigate("/uupdate", { state: { id, name, _email, _address } });
//   };

//   const handleAllUser = () => {
//     navigate("/auser", { state: { id, name, _email, _address } });
//   };

//   return (
//     <div>
//       <Usernav />
//       <h1>Welcome, {name}</h1>
//       <p>Email: {_email}</p>
//       <p>Address: {_address}</p>
//       <Button variant="primary" type="login" onClick={handleUpdateUser}>Update User Info</Button>
//       <br />
//       <Button variant="primary" type="login" onClick={handleAllUser}>Update User Info</Button>
//     </div>
//   );
// }

// export default Afterlogin;


// // function Afterlogin() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const { id, name, _email, _address } = location.state || {};

// //   // Log location state to debug
// //   console.log("Location State:", location.state);

// //   const handleUpdateUser = () => {
// //     navigate("/uupdate", { state: { id, name, _email, _address } });
// //   };

// //   const handleAllUser = () => {
// //     navigate("/auser", { state: { id, name, _email, _address } });
// //   };

// //   if (!name) {
// //     // Render loading or error message if no name
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <Usernav />
// //       <h1>Welcome, {name}</h1>
// //       <p>Email: {_email}</p>
// //       <p>Address: {_address}</p>
// //       <Button variant="primary" onClick={handleUpdateUser}>Update User Info</Button>
// //       <br />
// //       <Button variant="primary" onClick={handleAllUser}>View All Users</Button>
// //     </div>
// //   );
// // }

// // export default Afterlogin;
