const mongoose = require("mongoose");

const book = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,

    },
    price: {
      type: String,

    },
    desc: {
      type: String,

    },
    language: {
      type: String,
   
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", book);
