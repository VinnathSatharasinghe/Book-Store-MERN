import { useEffect, useState } from 'react';
import axios from 'axios';

import '../../css/booktable.css';

const BooksTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vbooks');
        setBooks(response.data);
      } catch (error) {
        console.error("There was an error fetching the books!", error);
      }
    };

    fetchBooks();
  }, []);

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
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.desc}</td>
              <td>{book.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;