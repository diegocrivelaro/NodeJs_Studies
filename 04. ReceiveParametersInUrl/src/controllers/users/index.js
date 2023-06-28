const users = require("../../mocks/users");

const message = {
  message: "User not found",
};

module.exports = {
  getUsers(req, res) {
    users.sort((a, b) => {
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
    res.end(JSON.stringify(users));
  },

  getUserByid(req, res) {
    const { id } = req.params;

    const user = users.find((user) => user.id == +id);

    if (!user) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(message));
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(user));
  },
};
