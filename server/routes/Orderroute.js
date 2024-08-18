const router = require("express").Router();

const Book = require("../models/order");

// add book
router.post("/orders", async (req, res) => {
  try {
    const { user, book, status} = req.body;

    if (!user) {
      return res.status(200).json({ message: "nouser" });

    }

    if (!book) {
      return res.status(200).json({ message: "nobook" });

    }

    if (!status) {
      return res.status(200).json({ message: "nostatus" });

    }


    const newOrder = new Book({
      title: title,
      author: author,

    });

    await newOrder.save();
    return res.status(200).json({ message: "bookok" });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
  }
});


module.exports = router;