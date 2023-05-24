const userController = require("./controllers/UserController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userController.listUsers,
  },
  {
    endpoint: "/products",
    method: "GET",
    handler: userController.listProducts,
  },
];
