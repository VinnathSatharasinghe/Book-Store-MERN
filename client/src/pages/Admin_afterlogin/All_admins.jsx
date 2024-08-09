import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../../css/allbooks.css';


const AdminCards = () => {
    const [admins, setAdmins] = useState([]);
    const navigate = useNavigate();


    function prepage() {
      
      navigate("/aafterlogin", {
      });
    
    }
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/nadmins', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, 
            },
          });
          setAdmins(response.data);
        } catch (err) {
          console.error('Error fetching users:', err);
        }
      };
  
      fetchUsers();
    }, []);


//   const handleEdit = (id) => {
//     navigate("/bupdate", { state: { id } });
//     console.log(`Edit book with id: ${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/books/${id}`);
//       setBooks(books.filter(book => book._id !== id));
//     } catch (error) {
//       console.error("There was an error deleting the book!", error);
//     }
//   };

  return (
    <div className="book-list">
      <h1>Admin List</h1>
      <Button onClick={prepage}>After LOgin</Button>
      <div className="card-container">
        {admins.map((admin) => (
          <div key={admin.id} className="card">
            <h2>{admin.username}</h2>

            
            <p><strong>Admin:</strong> {admin.username}</p>
            <div className="card-actions">
              {/* <button onClick={() => handleEdit(book._id)}>Edit</button>
              <button onClick={() => handleDelete(book._id)}>Delete</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCards;
