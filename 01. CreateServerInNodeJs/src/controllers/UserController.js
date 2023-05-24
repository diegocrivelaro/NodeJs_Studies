const users = require("../mocks/users");
const products = require("../mocks/products");

module.exports = {
  listUsers(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(users));
  },
  listProducts(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(products));
  },
};
