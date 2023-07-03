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
    endpoint: "/users",
    method: "POST",
    handler: userController.createUser
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
  },
  {
    endpoint: "/products",
    method: "POST",
    handler: productController.createProduct
  }
]