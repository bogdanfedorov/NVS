import { fileRuner } from "./lib/fileRuner/index.js";
import { createHttpServer_v1 } from "./lib/httpTransport/index.js";

var doLog = console.table;

fileRuner("./api/promice/bad.js", doLog);
fileRuner("./api/promice/good.js", doLog);
