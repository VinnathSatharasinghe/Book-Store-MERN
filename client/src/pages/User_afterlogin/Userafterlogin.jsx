import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Usernav from './Usernavbar';

function Afterlogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, _email, _address } = location.state || {
    id: "N/A",
    name: "Guest",
    _email: "N/A",
    _address: "N/A",
  };

  // console.log(location.state);



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