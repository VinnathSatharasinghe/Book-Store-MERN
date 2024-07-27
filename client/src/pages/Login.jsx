// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";

// import "../css/login.css";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/v1/login", {
//         username,
//         password,
//       });
//       const {
//         message,
//         token,
//         expiresAt,
//         id,
//         username: returnedUsername,
//       } = response.data;

//       if (token) {
//         // Store token in localStorage (or cookies)
//         localStorage.setItem("token", token);
//         localStorage.setItem("expiresAt", expiresAt);
//         localStorage.setItem("userId", id);
//         localStorage.setItem("username", returnedUsername);

//         // Show success message
//         toast.success(message);

//         // Navigate to another page, e.g., home page
//         navigate("/client/src/pages/Home.jsx");
//       } else {
//         // Show error message
//         toast.error(message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Server error. Please try again later.");
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="login-box">
//         <Col>
//           <h2 className="text-center mb-4 text-light">Login</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formUsername">
//               <Form.Label className="text-light">Username</Form.Label>
//               <input
//                type="text"
//                autoComplete="off"
//                defaultValue={""}
//                placeholder="Enter username"
//                onChange={(e) => setUsername(e.target.value)}
//                required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formPassword">
//               <Form.Label className="text-light">Password</Form.Label>
//               <input
//                 type="password"
//                 autoComplete="off"
//                 defaultValue={""}
//                 placeholder="Enter password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <ToastContainer
//             position="bottom-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />

//             <Button
//               variant="primary"
//               type="submit"
//               className="w-100"
//             >
//               Login
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/login.css"; // Ensure you have your CSS file in place

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("localhost:5000/api/login", {
        username,
        password,
      })
      .then((result) => {
        if (result.data.message === "username_required") {
          toast.error("Login Failed. No User existed.", { autoClose: 5000 });
        } else if (result.data.message === "password_required") {
          toast.error("Password_required");
        } else if (result.data.message === "invalid_username") {
          toast.error("Invalid_username");
        } else if (result.data.message === "invalid_password") {
          toast.error("Invalid_password");
        } else if (result.data.message === "login_successfully") {
          toast.success("Login successful!", { autoClose: 5000 });

          // navigate("/", {
          //   state: {
          //     name: result.data.username,
          //     email: result.data.email,
          //     id: result.data._id,
          //   },
          // });
        } else {
          toast.error("No record existed");
        }
      })
      .catch((err) => console.log(err));

    // const {
    //   message,
    //   token,
    //   expiresAt,
    //   id,
    //   username: returnedUsername,
    // } = response.data;

    // if (token) {

    //   localStorage.setItem('token', token);
    //   localStorage.setItem('expiresAt', expiresAt);
    //   localStorage.setItem('userId', id);
    //   localStorage.setItem('username', returnedUsername);

    //   toast.success(message);
    //   navigate('../pages/Home.jsx');
    // } else {
    //   toast.error(message);
    // }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="login-box p-4 shadow-lg">
        <Col>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <input
                type="text"
                placeholder="Enter username"
                defaultValue={""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                placeholder="Enter password"
                defaultValue={""}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Login;

``;
