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
    navigate("/alluser", { state: { id, name } });
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
      <Button variant="primary" type="login" onClick={handleAllUser}>All Users</Button>
      <Button variant="primary" type="login" onClick={handleBooks}>Books Table</Button>
      <br />
      <Button variant="primary" type="login"> <a href="/addbook">Add book</a></Button>
      <Button variant="primary" type="login">  <a href="/allbooks">All book</a> </Button>
      <Button variant="primary" type="login">  <a href="/alladmins">All Admins</a> </Button>

    </div>
  );
}

export default Adminafterlog;
