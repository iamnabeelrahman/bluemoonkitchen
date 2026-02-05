let counter = 0;

const callCOntroller = () => {
  console.log("COntroller is: ", counter);
  counter = counter + 1;
};

const withoutSetInterver = (fn, timing) => {
  const callFunction = () => {
    console.clear();
    fn();
    setTimeout(callFunction, timing);
  };
  callFunction();
};

withoutSetInterver(callCOntroller, 1000);
