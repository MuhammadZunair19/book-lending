// app.js - Entry point of the system
const express = require("express");
const bookRoutes = require("./books");
const userRoutes = require("./users");

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




