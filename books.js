const express = require("express");
const bookRouter = express.Router();

let books = [];

bookRouter.post("/lend", (req, res) => {
  const { title, author, borrower, dueDate, category } = req.body;
  books.push({ title, author, borrower, dueDate, category });
  res.json({ message: "Book lent successfully", books });
});

bookRouter.get("/view", (req, res) => {
  res.json({ books });
});

module.exports = bookRouter;
