const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userController.getUsers,
  },
  {
    endpoint: "/products",
    method: "GET",
    handler: productController.getProducts,
  },
];
