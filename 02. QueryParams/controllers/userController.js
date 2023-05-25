const users = require("../mocks/users");

module.exports = {
  getUsers(req, res) {
    const { order } = req.query;

    users.sort((a, b) => {
      if (order.includes("desc")) {
        return a.id > b.id ? -1 : 1;
      }

      return a.id < b.id ? -1 : 1;
    });

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users));
  },
};
