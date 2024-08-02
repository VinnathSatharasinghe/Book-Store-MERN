import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../css/allbooks.css';

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
    navigate("/bupdate", { state: { id } });
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
    <div className="book-list">
      <h1>Books List</h1>
      <div className="card-container">
        {books.map((book) => (
          <div key={book._id} className="card">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Description:</strong> {book.desc}</p>
            <div className="card-actions">
              <button onClick={() => handleEdit(book._id)}>Edit</button>
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksTable;
