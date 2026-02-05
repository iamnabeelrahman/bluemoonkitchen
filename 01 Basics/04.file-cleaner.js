const fs = require("node:fs");

const data = fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("data is:", data);

  data = data.replace(/\s+/g, " ").trim(); //  // multiple spaces → single

  // Write back to same file
  fs.writeFile("file.txt", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("✅ File cleaned and saved!");
  });

});
