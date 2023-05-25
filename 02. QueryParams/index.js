const http = require("http");
const routes = require("./routes");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url, true);

  const route = routes.find(
    (routeObj) =>
      urlParsed.pathname === routeObj.endpoint && req.method === routeObj.method
  );

  if (route) {
    req.query = urlParsed.query;

    route.handler(req, res);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    res.end("Rota não encontrada!");
  }
});

server.listen(4040, () => {
  console.log("Server is running on port 4040 🚀");
});
