import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import '../../css/allbooks.css';


const AdminCards = () => {
    const [admins, setAdmins] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/admins', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store your JWT in localStorage
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
