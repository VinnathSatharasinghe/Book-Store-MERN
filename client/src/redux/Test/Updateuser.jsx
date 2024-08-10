import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../css/log.css";
import "react-toastify/dist/ReactToastify.css";

import { updateUser } from "../../redux/slices/userSlice.js";



function Updateuser() {
  const location = useLocation();
  const { id, name, _email, _address } = location.state;

  const [username, setUsername] = useState(name);
  const [email, setEmail] = useState(_email);
  const [address, setAddress] = useState(_address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const handleNavigation = () => {
    toast.success("Let's go to the home page");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, username, email, address }))
      .unwrap()
      .then(() => {
        toast.success("Update Successful!", { autoClose: 5000 });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error(`Update Failed. ${err}`);
      });
  };

  return (
    <div>
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

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update"}
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

          {error && <p className="error-message">Update Failed: {error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Updateuser;
