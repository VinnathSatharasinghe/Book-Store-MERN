const router = require("express").Router();

const Book = require("../models/book");

// add book
router.post("/books", async (req, res) => {
  try {
    const { url, title, author, price, desc, language } = req.body;

    if (!title) {
      return res.status(200).json({ message: "notitle" });
    }

    if (!author) {
      return res.status(200).json({ message: "noauther" });
    }

    if (!price) {
      return res.status(200).json({ message: "noprice" });
    }

    if (!language) {
      return res.status(200).json({ message: "nolang" });
    }

    const bookExists = await Book.findOne({ title: title });
    if (bookExists) {
      return res.status(200).json({ message: "oldbook" });
    }

    const newBook = new Book({
      url: url,
      title: title,
      author: author,
      price: price,
      desc: desc,
      language: language,
    });

    await newBook.save();
    return res.status(200).json({ message: "bookok" });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
  }
});

module.exports = router;