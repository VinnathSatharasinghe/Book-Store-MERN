import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "../../css/log.css"; //use same css used for login page
import "react-toastify/dist/ReactToastify.css";

function Bookupdate() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [language, setLanguage] = useState();
  // const [url, setUrl] = useState();
  const [desc, setDesc] = useState();

  // const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/books/view/${id}`)
        .then((response) => {
          const book = response.data;
          setTitle(book.title);
          setAuthor(book.author);
          setPrice(book.price);
          setLanguage(book.language);
          // setUrl(book.url);
          setDesc(book.desc);
        })
        .catch((error) => {
          console.error("There was an error fetching the book!", error);
        });
    }
  }, [id]);


  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/books/update/${id}`, {
        desc,
        title,
        author,
        price,
        language,
      })
      .then((result) => {
        console.log(result);

         if (result.data.message === "bookUpdated") {
          toast.success("Book Successfuly Updated", { autoClose: 5000 });
          // setTimeout(() => {
          //   navigate("");
          // }, 1000);
        } else if (result.data.message === "bookNotFound") {
          toast.success("Book not found Updated", { autoClose: 5000 });

        } else {
          toast.error("Uplord Failed.");
        }
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleUpdate}>
            <h4>Update Book</h4>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                autoComplete="off"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Author</Form.Label>
              <br />
              <input
                type="text"
                name="author"
                placeholder="Enter Author"
                autoComplete="off"
                defaultValue={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
              <br />
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                autoComplete="off"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLang">
            <Form.Label>Language</Form.Label>
              <br />
              <input
                type="text"
                name="lang"
                placeholder="Enter Language"
                autoComplete="off"
                defaultValue={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
              <br />
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                autoComplete="off"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
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
        </div>
      </div>
    </div>
  );
}

export default Bookupdate;
