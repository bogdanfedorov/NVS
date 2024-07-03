({
  method: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve("success Promise"), 2000);
    }),
});
