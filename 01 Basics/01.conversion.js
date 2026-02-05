/*
========================================
🧠 JavaScript Type Conversion Practice
Author: Nabeel
Purpose: Understanding JS type conversion, coercion, and data transformation
========================================
*/

console.log("===== BASIC TYPE CONVERSION =====");

// Number → String
let number = 3;
let stringNumber = String(number);

console.log(typeof number, number); // number 3
console.log(typeof stringNumber, stringNumber); // string "3"

console.log("\n===== STRING → NUMBER =====");

// Convert string to float
const floatingNumber = parseFloat("3.14");
console.log(floatingNumber); // 3.14

// String to integer (removes decimal part)
let price = "49.99";
console.log(parseInt(price)); // 49

console.log("\n===== BOOLEAN ↔ NUMBER =====");

const trueNumber = Number(true); // 1
const falseNumber = Number(false); // 0

console.log(trueNumber, falseNumber);
console.log(false - true); // -1
console.log(false + true); // 1
console.log(true - false); // 1
console.log(true + false); // 1

console.log("\n===== TRUTHY & FALSY =====");

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("true")); // true (string is truthy)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log("\n===== STRING & NUMBER OPERATIONS =====");

console.log("6" - 2); // 4 (string converted to number)

console.log("\n===== DECIMAL FORMATTING =====");

// Convert to 2 decimal places (returns string)
const decimalWithTwoPlaces = Number(5.6789).toFixed(2);
console.log(decimalWithTwoPlaces); // "5.68"

console.log("\n===== ARRAY CONVERSION =====");

const array = [2, 3, 4, 5];
const convertedArray = String(array);
console.log(convertedArray); // "2,3,4,5"

console.log("\n===== SAFE NUMBER CONVERSION =====");

let input = "";
console.log(Number(input)); // 0

console.log("\n===== OBJECT ↔ JSON =====");

const object = {
  name: "Nabeel",
  email: "nabeel@developer.com",
  password: "123456",
};

// Object → JSON string
const convertedObject = JSON.stringify(object);
console.log(convertedObject);

// JSON string → Object
const objectBack = JSON.parse(convertedObject);
console.log(objectBack);

console.log("\n===== ADVANCED TYPE COERCION =====");

// Array coercion
console.log([] + []); // ""

console.log([] + {}); // "[object Object]"

// Unary plus converts string → number
console.log(+"42"); // 42

// null & undefined math
console.log(null + 1); // 1
console.log(undefined + 1); // NaN

// Double NOT (!!) converts to boolean
console.log(!!"hello"); // true
console.log(!!0); // false

console.log("\n===== DATE CONVERSIONS =====");

// Timestamp → readable date
const timestamp = Date.now();
console.log(new Date(timestamp));

// String → Date object
const dateFromString = new Date("2026-02-04");
console.log(dateFromString);

// Date → DD/MM/YYYY
const today = new Date();
const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
  today.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}/${today.getFullYear()}`;

console.log(formattedDate);

console.log("\n===== DATA TRANSFORMATIONS =====");

// Nested array → flat
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(Infinity)); // [1,2,3,4]

// "15%" → 0.15
console.log(parseFloat("15%") / 100);

// Hex string → decimal
console.log(Number("0xFF")); // 255

console.log("\n===== UNIVERSAL BOOLEAN CONVERTER =====");

function toBoolean(value) {
  return Boolean(value);
}

console.log(toBoolean(0)); // false
console.log(toBoolean("Hi")); // true
console.log(toBoolean(null)); // false

/*
========================================
📝 QUESTIONS TO SOLVE TOMORROW
========================================

1. What is the output?
   [] + []
   [] + {}

2. Why does this work?
   +"42"

3. Convert a timestamp (milliseconds) into a readable date.

4. Convert "2026-02-04" into a Date object.

5. Convert a Date object → "DD/MM/YYYY".

6. Convert:
   let user = { id: 1 };
   into: '{"id":1}'

7. What’s the result?
   null + 1
   undefined + 1

8. Explain:
   !!"hello"
   !!0

9. Convert nested array into flat:
   [1, [2, [3, 4]]]

10. Convert "15%" → 0.15

11. Convert "0xFF" into decimal number.

12. Build a function that converts any value into boolean.
*/
