const http = require("http");
const { URL } = require("url");
const routes = require("./routes/index");

const server = http.createServer((req, res) => {
  const host = req.headers.host;
  const url = req.url;
  const parsedUrl = new URL(`http://${host}${url}`);
  let { pathname } = parsedUrl;
  let idParams = undefined;
  const queryParams = Object.fromEntries(parsedUrl.searchParams);
  const splitEndpoint = parsedUrl.pathname.split("/").filter(Boolean);
  const erroMessage = {
    message: "Endpoint not found",
  };

  if (splitEndpoint && splitEndpoint.length > 1) {
    idParams = splitEndpoint[1];
    pathname = `/${splitEndpoint[0]}/:id`;
  }

  const route = routes.find(
    (routeObj) =>
      pathname === routeObj.endpoint && req.method === routeObj.method
  );

  if (route) {
    req.queryParams = queryParams;
    req.params = {
      id: idParams,
    };

    route.handler(req, res);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(erroMessage));
  }
});

server.listen(4040, () => {
  console.log("Server is listening on port 4040 🚀");
});
