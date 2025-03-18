// users.js - Handles user authentication
const express = require("express");
const router = express.Router();

let users = [];

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

module.exports = router;
