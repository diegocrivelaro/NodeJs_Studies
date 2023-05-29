const userController = require("./controllers/userController");
const productsController = require("./controllers/productController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userController.getUsers,
  },
  {
    endpoint: "/products",
    method: "GET",
    handler: productsController.getProducts,
  },
];
