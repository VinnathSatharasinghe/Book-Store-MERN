import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../css/log.css"; 
import "react-toastify/dist/ReactToastify.css";

import UserNavBar from "./Usernavbar";

function Updateuser() {
  const location = useLocation();
  const { id, name, _email, _address } = location.state;

  const [username, setUsername] = useState(name);
  const [email, setEmail] = useState(_email);
  const [address, setAddress] = useState(_address);
  const navigate = useNavigate();

  const handleNavigation = () => {
    toast.success("Let's go to the home page");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Get the token from localStorage

    axios
      .post(`http://localhost:5000/api/user-update/${id}`, {
        username,
        email,
        address,
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the headers
        }
      })
      .then((result) => {
        console.log(result);

        if (result.data.message === "userok") {
          toast.success("Update Successful!", { autoClose: 5000 });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error(`Update Failed. ${result.data.message}`, { autoClose: 5000 });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Update Failed. ${err.response?.data?.message || err.message}`);
      });
  };

  return (
    <div>
      <UserNavBar />
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4>User Update {name}</h4>

            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <br />
              <input
                type="text"
                name="id"
                disabled
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
                name="username"
                placeholder="Enter Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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

          <Button onClick={handleNavigation} variant="primary" type="button">
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Updateuser;



