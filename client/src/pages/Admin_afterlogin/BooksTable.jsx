import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import '../../css/booktable.css';

const BooksTable = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vbook');
        setBooks(response.data);
      } catch (error) {
        console.error("There was an error fetching the books!", error);
      }
    };

    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    navigate("/bupdate",{ state: { id } });
    console.log(`Edit book with id: ${id}`);

  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error("There was an error deleting the book!", error);
    }
  };

  return (
    <div>
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.desc}</td>
              <td>
                <button onClick={() => handleEdit(book._id)}>Edit</button>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
