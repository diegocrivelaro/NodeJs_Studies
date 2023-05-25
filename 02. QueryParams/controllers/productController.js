const products = require("../mocks/products");

module.exports = {
  getProducts(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(products));
  },
};
