const router = require("express").Router();

const Book = require("../models/order");

// add book
router.post("/orders", async (req, res) => {
  try {
    const { user, book, status} = req.body;

    if (!user) {
      return res.status(200).json({ message: "notitle" });

    }

    if (!book) {
      return res.status(200).json({ message: "noauth" });

    }

    if (!status) {
      return res.status(200).json({ message: "noprice" });

    }


    const newOrder = new Book({
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