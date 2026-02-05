/* Print "Hi" after 1 second.
 Then, print "Hello" 2 seconds after "Hi/*
 Then, print "Hello there" 5 seconds after "Hello".
 */

 
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

sleep(1000)
  .then(() => {
    console.log("Hi");
    return sleep(2000);
  })
  .then(() => {
    console.log("Hello");
    return sleep(5000);
  })
  .then(() => {
    console.log("Hello there");
  });
