app.filter("makeTextUppercase", function () {
  return function (text) {
  	try {
  		if (text) {
	   	 	return text.toUpperCase();
  		}
  	}
  	catch (error) {
  		throw error;
  	}
  };
});