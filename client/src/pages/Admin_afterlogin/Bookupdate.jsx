import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "../../css/log.css"; //use same css used for login page
import "react-toastify/dist/ReactToastify.css";

function Bookupdate() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [language, setLanguage] = useState();
  const [url, setUrl] = useState();
  const [desc, setDesc] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/book/view/${id}`)
        .then((response) => {
          const book = response.data;
          setTitle(book.title);
          setAuthor(book.author);
          setPrice(book.price);
          setLanguage(book.language);
          setUrl(book.url);
          setDesc(book.desc);
        })
        .catch((error) => {
          console.error("There was an error fetching the book!", error);
        });
    }
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/books/update/${id}", {
        url,
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
          setTimeout(() => {
            navigate("");
          }, 1000);
        } else {
          toast.error("Uplord Failed.");
        }
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div>
         <h1>Welcome, {title}</h1>
         <p>id: {id}</p>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
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
                defaultValue={price}
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
                defaultValue={""}
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
                defaultValue={id}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Url</Form.Label>
              <br />
              <input
                type="text"
                name="url"
                placeholder="Enter Url"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setUrl(e.target.value)}
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
                defaultValue={""}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Singup
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
