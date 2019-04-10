var fs = require('fs');

fs.writeFile("test.txt", "Hello there", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
