const products = require("../../mocks/products");

const message = {
  message: "User not found",
};

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

      const selectedPattern =
        pattern.find((item) => order?.includes(item.name)) ?? pattern[0];

      return selectedPattern.logic;
    });

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(products));
  },

  getProductById(req, res) {
    const { id } = req.params;

    const product = products.find((product) => product.id === +id);

    if (!product) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(message));
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(product));
  },
};
