function promisifiedSetTimeOut() {
  new Promise(
    function () {
      setTimeout(() => console.log("Hi"), 1000);
    },
    new Promise(
      function () {
        setTimeout(() => console.log("Hello"), 3000);
      },
      new Promise(function () {
        setTimeout(() => console.log("Hello there"), 5000);
      }),
    ),
  );
}

promisifiedSetTimeOut();
