import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/log.css"; //use same css used for login page
 
import "react-toastify/dist/ReactToastify.css";

function Singup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleNavigation = () => {
    toast.success("Let's go to home page");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/signup", { username, password, email })
      .then((result) => {
        console.log(result);

        if (result.data.message === "nouser") {
          toast.error("Singup Failed. No User Included.", { autoClose: 5000 });

        } else if (result.data.message === "nopass") {
            toast.error("Singup Failed. No Password Included.", { autoClose: 5000 });
  
          } else if (result.data.message === "caseuser") {
          toast.error("Singup Failed. User Already existed.");

        }  else if (result.data.message === "userok") {
          toast.success("Singup Successful!", { autoClose: 5000 });
          setTimeout(() => {
            navigate("/");
          },1000);
       
        } else {
          toast.error("Singup Failed. No record existed.");
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Singup
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

          <Button onClick={handleNavigation} variant="primary" type="login" >Home
            {/* <a href="/">Home</a> */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Singup;