const userController = require("../controllers/users/index")
const productController = require("../controllers/products/index")

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userController.getUsers
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: userController.getUserById
  },
  {
    endpoint: "/products",
    method: "GET",
    handler: productController.getProducts
  },
  {
    endpoint: "/products/:id",
    method: "GET",
    handler: productController.getProductById
  }
]