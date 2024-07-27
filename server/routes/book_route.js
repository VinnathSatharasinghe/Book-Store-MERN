const router = require("express").Router();

const Book = require("../models/book");

// add book
router.post("/books", async (req, res) => {
  try {
    const { title, author, price, desc, language } = req.body;

    if (!title) {
      return res.status(200).json({ message: "notitle" });

    }

    if (!author) {
      return res.status(200).json({ message: "noauth" });

    }

    if (!price) {
      return res.status(200).json({ message: "noprice" });

    }

    if (!desc) {
        return res.status(200).json({ message: "nodes" });
  
      }

      if (!language ) {
        return res.status(200).json({ message: "nolang" });
  
      }

 

    const bookExists = await Book.findOne({ title: title });
    if (bookExists) {
      return res.status(200).json({ message: "oldbook" });
    }


    const newBook = new Book({
      title: title,
      author: author,

    });

    await newBook.save();
    return res.status(200).json({ message: "bookok" });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
  }
});


module.exports = router;