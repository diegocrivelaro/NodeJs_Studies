const http = require("http");
const { URL } = require("url");
const routes = require("./routes");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:4040${req.url}`);
  const queryParams = Object.fromEntries(parsedUrl.searchParams);

  const route = routes.find((routeObj) => {
    return (
      parsedUrl.pathname === routeObj.endpoint && req.method === routeObj.method
    );
  });

  if (route) {
    req.queryParams = queryParams;

    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(4040, () => {
  console.log("Server is running on port 4040 🚀");
});
