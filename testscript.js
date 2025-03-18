// testscript.js - Automated tests
const axios = require("axios");

(async function runTests() {
  try {
    let res = await axios.post("http://localhost:3000/books/lend", {
      title: "1984",
      author: "George Orwell",
      borrower: "Alice",
      dueDate: "2025-04-01",
      category: "Fiction"
    });
    console.log("Lend Book Test: ", res.data);
  } catch (error) {
    console.error("Test failed", error.response.data);
  }
})();
