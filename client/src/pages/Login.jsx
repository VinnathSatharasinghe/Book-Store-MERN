import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/log.css";
import { useAuth } from "../components/Auth/AuthContext.tsx";


import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then((result) => {
        console.log(result);

        if (result.data.message === "nousername") {
          toast.error("Login Failed. No user.", { autoClose: 5000 });

        } else if (result.data.message === "caseusername") {
          toast.error("Login Failed. No user existed.");

        } else if (result.data.message === "nopassword") {
          toast.error("Login Failed. No Password");

        } else if (result.data.message === "casepassword") {
          toast.error("Login Failed. Incorrect Password");
          
        } else if (result.data.message === "loginok") {

          const token = result.data.token; // Get the token from the response
          const expiresAt = result.data.expiresAt; // Get the expiration time in seconds from the response
          const expiresAt12HourFormat  = result.data.expiresAt12HourFormat;
          const liveCountdown  = result.data.liveCountdown;
        
          // Store the token and expiration time in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiration", expiresAt);
          localStorage.setItem("time", expiresAt12HourFormat);
          localStorage.setItem("liveCountdown", liveCountdown);
        
          console.log("Token:", localStorage.getItem("token"));
          console.log("Token Expiration Time:", localStorage.getItem("tokenExpiration"));
          console.log("Token Expiration Time 12H:", localStorage.getItem("time"));
          console.log("liveCountdown", localStorage.getItem("liveCountdown"));
          

          // Use the login function from AuthContext to store the token and expiration time
          login(token, expiresAt, liveCountdown);


          toast.success("Login successful!");


          setTimeout(() => {
            navigate("/uafterlogin", {
              state: {
                id: result.data.id,
                name: result.data.username,
                _email: result.data.email,
                _address: result.data.address,
                
              },
            });
          }, 1000);
        } else {
          toast.error("Login Failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4>Login Now</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              {/* <Form.Label>Username</Form.Label> */}
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Username"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>

            <ToastContainer
              position="top-right"
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
          </Form>

          <Button variant="primary" type="login">
            <a href="/">Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;



