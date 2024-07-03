import { createServer } from "node:http";

var createHandler = (req) => `../api/${req.url}.js`;

var createTransport = (res) => (error, value) => {
  if (error !== null) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("NotFound");
    res.end();
    return;
  }

  if (typeof value === "object") {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(JSON.stringify(value));
    res.end();
    return;
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(value);
    res.end();
    return;
  }
};

var extractBody = (req) => {
  return {
    body: JSON.parse(req.body),
  };
};

export var createHttpServer_v1 = (pathHendler) => {
  var transport = null;
  return createServer((req, res) => {
    pathHendler(createHandler(req), createTransport(res), extractBody(req));
  });
};
