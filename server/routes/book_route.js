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

// Fetch all books
router.get("/vbook", async (req, res) => {
  console.log("GET /vbook route hit");
  try {
    const books = await Book.find({});
    console.log("Bookss fetched: ", books);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/books/view/:id", async (req, res) => {
  
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    console.log(`GET /vbook/${bookId} route hit`);
    
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    console.log("Book fetched: ", book);
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

// Delete book
router.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "bookDeleted" });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
  }
});

// Update book
router.put("/books/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { url, title, author, price, desc, language } = req.body;

    if (!title) {
      return res.status(200).json({ message: "notitle" });
    }

    if (!author) {
      return res.status(200).json({ message: "noauthor" });
    }

    if (!price) {
      return res.status(200).json({ message: "noprice" });
    }

    if (!language) {
      return res.status(200).json({ message: "nolang" });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        price,
        desc,
        language,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "bookNotFound" });
    }

    res.status(200).json({ message: "bookUpdated", updatedBook });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });

    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
