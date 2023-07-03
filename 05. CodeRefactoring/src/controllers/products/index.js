const products = require("../../mocks/products")

module.exports = {
  getProducts(req, res) {
    products.sort((a, b) => {
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

    res.send(200, products)
  },

  getProductById(req, res) {
    const { id } = req.params

    const product = products.find(product => product.id === +id)

    if (!product) {
      res.send(400, { "message": "Product not found"})
    }

    res.send(200, product)
  }
}