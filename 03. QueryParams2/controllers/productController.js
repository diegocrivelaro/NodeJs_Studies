const products = require("../mocks/products");

module.exports = {
  getProducts(req, res) {
    products.sort((a, b) => {
      const { order } = req.queryParams;
      const pattern = [
        {
          name: "default",
          logic: a.id < b.id ? -1 : 1,
        },
        {
          name: "asce",
          logic: a.id < b.id ? -1 : 1,
        },
        {
          name: "desc",
          logic: a.id > b.id ? -1 : 1,
        },
      ];

      const getMatchingObject = order
        ? pattern.find((item) => order.includes(item.name))
        : pattern[0];

      return getMatchingObject.logic;
    });

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(products));
  },
};
