import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/log.css"; 
import { useAuth } from "../components/Auth/AuthContext.tsx";
import "react-toastify/dist/ReactToastify.css";

function Admin_login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { alogin } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/admin-login", { username, password })
      .then((result) => {
        console.log(result);

        if (result.data.message == "noadmin") {
          toast.error("Login Failed. No user.");

        } else if (result.data.message == "caseadmin") {
          toast.error("Login Failed. No user existed.");

        } else if (result.data.message == "nopass") {
          toast.error("Login Failed. No Password");
          
        } else if (result.data.message == "casepass") {
          toast.error("Login Failed. Incorrect Password");

        } else if (result.data.message == "adminloginok") {
          toast.success("Admin Login Successful!");

          const token = result.data.token; 
          const expiresAt = result.data.expiresAt;

          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiration", expiresAt);
          alogin(token, expiresAt);
  

          setTimeout(() => {
            navigate("/aafterlogin", {
              state: {
                 id: result.data.id,
                 name: result.data.name,
              },
            });
          },1000);
       
        } else {
          toast.error("Admin Login Failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
          <h2 style={{marginTop:'50px'}}>Admin Login</h2>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <br />
              <input
                type="text"
                name="admin-username"
                placeholder="Enter Username"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <br />
              <input
                type="password"
                name="admin-password"
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

export default Admin_login;


