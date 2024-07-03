import vm from "node:vm";
import fs from "node:fs/promises";

import { asyncWrapper, typeResult } from "./helpers.js";
import { fsReadFileConfig, vmContext, vmContextOptions } from "./config.js";

var doLog = console.log;

var doReadFile = async (filePath) => fs.readFile(filePath, fsReadFileConfig);

var doCreateContext = () => vm.createContext(vmContext, vmContextOptions);

var doCreateScript = (theFileContent) =>
  new vm.Script(`
      var module = ${theFileContent}
      result = module.method()
    `);

/**
 * @param {string} filePath
 * @param {Transport} transport
 **/
export var fileRuner = (filePath, transport) =>
  doReadFile(filePath)
    .then((theFileContent) => {
      var context = doCreateContext();
      var script = doCreateScript(theFileContent);

      script.runInContext(context);

      asyncWrapper(context.result, transport);
    })
    .catch(() => transport(typeResult(new Error("NotFound"), null)));
