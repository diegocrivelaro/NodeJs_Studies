const products = require("../mocks/products");

module.exports = {
  listProducts(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(products));
  },
};
