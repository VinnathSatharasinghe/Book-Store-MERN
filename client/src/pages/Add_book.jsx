import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/log.css"; //use same css used for login page

import "react-toastify/dist/ReactToastify.css";

function Addbook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [language, setLanguage] = useState();
  const [url, setUrl] = useState();
  const [desc, setDesc] = useState();

  const navigate = useNavigate();

  const handleNavigation = () => {
    toast.success("Let's go to home page");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/books", {
        url,
        desc,
        title,
        author,
        price,
        language,
      })
      .then((result) => {
        console.log(result);

        if (result.data.message === "notitle") {
          toast.error("Book Uplord Failed. No Title Included");

        } else if (result.data.message === "noauther") {
          toast.error("Book Uplord Failed. No Author Included");

        } else if (result.data.message === "noprice") {
          toast.error("Book Uplord Failed. No Price Included");

        } else if (result.data.message === "nolang") {
          toast.error("Book Uplord Failed. No Language Included");

        } else if (result.data.message === "oldbook") {
          toast.error("Book Uplord Failed. Book Already Existed");

        } else if (result.data.message === "bookok") {
          toast.success("Book Successfuly Uplorded", { autoClose: 5000 });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Singup Failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4>Add Book</h4>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                autoComplete="off"
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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

          <Button onClick={handleNavigation} variant="primary" type="login">
            Home
            {/* <a href="/">Home</a> */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Addbook;
