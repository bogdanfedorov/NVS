/**
 * @return {Result} result object
 **/
export var typeResult = (error, result) => ({
  error,
  result,
});

/**
 * @param {Transport} transport
 **/
export var asyncWrapper = (result, transport) => {
  if (result.then) {
    result
      .then((result) => {
        transport(typeResult(null, result));
      })
      .catch((error) => {
        transport(typeResult(error, null));
      });
  } else {
    transport(typeResult(null, result));
  }
};
