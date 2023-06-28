const userController = require("../controllers/users");
const productController = require("../controllers/products");

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
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: userController.getUserByid,
  },
  {
    endpoint: "/products/:id",
    method: "GET",
    handler: productController.getProductById,
  },
];
