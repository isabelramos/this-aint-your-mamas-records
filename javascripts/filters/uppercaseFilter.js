app.filter("makeTextUppercase", function () {
  return function (text) {
      return text.toUpperCase();
  };
});