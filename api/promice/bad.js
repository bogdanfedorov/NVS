({
  method: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Some bad");
      }, 2000);
    }),
});
