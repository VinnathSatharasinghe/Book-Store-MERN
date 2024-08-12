import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import { login } from "../slices/userAuthSlice.js";
import "../../css/log.css";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(login(username, password))
      .then((action) => {
        if (action.success) {
          console.log("Navigating to /uafterlogin with state:", {
            id: action.user.id,
            name: action.user.username,
            _email: action.user.email,
            _address: action.user.address,
          });

        }

        if (action.success) {
          // console.log("User is authenticated:", action.user);
          // console.log(location.state);

          setTimeout(() => {
            navigate("/uafterlogin", {
              state: {
                id: action.user.id,
                name: action.user.username,
                _email: action.user.email,
                _address: action.user.address,
              },
            });
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("Login failed, staying on the login page", err);
      });
  };

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4>Login Now</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="off"
                value={password}
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
