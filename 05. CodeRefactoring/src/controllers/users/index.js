const users = require("../../mocks/users")

module.exports = {
  getUsers(req, res) {
    users.sort((a, b) => {
      const { order } = req.searchParams;

      const pattern = [
        {
          name: "default",
          logic: a.id < b.id ? -1 : 1
        },
        {
          name: "asce",
          logic: a.id < b.id ? -1 : 1
        },
        {
          name: "desc",
          logic: a.id > b.id ? -1 : 1
        }
      ]

      const selectedPattern = pattern.find(item => order?.includes(item.name)) ?? pattern[0]

      return selectedPattern.logic
    })

    res.send(200, users)
  },

  getUserById(req, res) {
    const { id } = req.params;

    const user = users.find(user => user.id === +id)

    if(!user) {
      res.send(400, { "message": "User not found"})
    }

    res.send(200, user)
  }
}