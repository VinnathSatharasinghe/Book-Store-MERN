import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/log.css"; //use same css used for login page
import "react-toastify/dist/ReactToastify.css";
import UserNavBar from "./user_navbar";

function Updateuser() {
  const location = useLocation();
  const { id } = location.state;
  const { name } = location.state;
  const { _email } = location.state;
  const { _address } = location.state;

  const [username, setUsername] = useState(name);
  const [email, setEmail] = useState(_email);
  const [address, setAddress] = useState(_address);
  const navigate = useNavigate();

  const handleNavigation = () => {
    toast.success("Let's go to home page");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/user-update", {
        username,
        email,
        address,
      })
      .then((result) => {
        console.log(result);

        if (result.data.message === "nouser") {
          toast.error("Update Failed. No User Included.");
        } else if (result.data.message === "nopass") {
          toast.error("Update Failed. No Password Included.");
        } else if (result.data.message === "caseuser") {
          toast.error("Update Failed. User Already existed.");
        } else if (result.data.message === "userok") {
          toast.success("Update Successful!");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Update Failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <UserNavBar/>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleUpdate}>
            <h4>User Update {name}</h4>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>id</Form.Label>
              <br />
              <input
                type="text"
                name="id"
                disabled="true"
                autoComplete="off"
                defaultValue={id}
                
              />
            </Form.Group>

            <br />
            
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Username"
                autoComplete="off"
                defaultValue={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                autoComplete="off"
                defaultValue={_email}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                autoComplete="off"
                defaultValue={_address}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
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

          <Button onClick={handleNavigation} variant="primary" type="login">
            Home
            {/* <a href="/">Home</a> */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Updateuser;
