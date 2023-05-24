const http = require("http");
const routes = require("./routes");

const server = http.createServer((req, res) => {
  const route = routes.find((routerObj) => {
    return req.url === routerObj.endpoint && req.method === routerObj.method;
  });

  if (route) {
    route.handler(req, res);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>Não encontrado!</h1>");
  }
});

server.listen(4040, () => {
  console.log("Server is running on port 4040 🚀");
});
