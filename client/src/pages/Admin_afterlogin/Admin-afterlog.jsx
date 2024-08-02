import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';


function Adminafterlog() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name } = location.state || {};

  const handleUpdateAdmin = () => {
    navigate("/uupdate", { state: { id, name } });
  };

  const handleAllUser = () => {
    navigate("/auser", { state: { id, name } });
  };

  const handleBooks = () => {
    navigate("/vbooks");
  };

  return (
    <div>

      <h1>Welcome, {name}</h1>
      <p>id: {id}</p>
      <Button variant="primary" type="login" onClick={handleUpdateAdmin}>Update Admin</Button>
      <br />
      <Button variant="primary" type="login" onClick={handleAllUser}>Update User Info</Button>
      <Button variant="primary" type="login" onClick={handleBooks}>Books</Button>
    </div>
  );
}

export default Adminafterlog;
