// helpers.js - Utility functions for filtering books
function filterBooks(books, query) {
  return books.filter(book =>
    Object.keys(query).every(key => book[key] === query[key])
  );
}

module.exports = { filterBooks };
