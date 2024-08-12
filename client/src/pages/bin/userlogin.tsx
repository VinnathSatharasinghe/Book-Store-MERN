import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../src/css/log.css";
import { useAuth } from "../../components/Auth/AuthContext";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        
          // Store the token and expiration time in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiration", expiresAt);
        
          console.log("Token:", localStorage.getItem("token"));
          console.log("Token Expiration Time:", localStorage.getItem("tokenExpiration"));

          // Use the login function from AuthContext to store the token and expiration time
          login(token, expiresAt);

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

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4>Login Now</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <input
                type="text"
                name="name"
                placeholder="Enter Username"
                autoComplete="off"
                value={username}
                onChange={handleChangeUsername}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="off"
                value={password}
                onChange={handleChangePassword}
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

          <Button variant="primary" type="button">
            <a href="/">Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
