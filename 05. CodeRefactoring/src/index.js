const http = require('http');
const { URL } = require('url');
const routes = require("./routes/index")

const server = http.createServer((req, res) => {
  const host = req.headers.host // localhost:4040
  const path = req.url // casa/3
  const method = req.method // GET
  const urlParsed = new URL(`http://${host}${path}`)
  let { pathname } = urlParsed;
  let idParams = undefined;
  const splitEndpoint = pathname.split(`/`).filter(Boolean)
  const searchParams = Object.fromEntries(urlParsed.searchParams);


  res.send = (statusCode, body) => {
    res.writeHead(statusCode, { "Content-Type": "application/json"})
    res.end(JSON.stringify(body))
  }

  if (splitEndpoint && splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    idParams = splitEndpoint[1]
  }

  const route = routes.find(route => route.endpoint === pathname && route.method === method)

  if (route) {
    req.searchParams = searchParams
    req.params = {
      id: idParams
    }

    route.handler(req, res)
  } else {
    res.send(404, { message: "Route not found."})
  }
})

server.listen(4040, () => {
  console.log('Server is running at http://localhost:4040 🚀')
})