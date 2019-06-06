const fs = require('fs');

let args = process.argv.slice(2);
console.log(args.length);
if(args.length < 1){
  console.log('Error: Please enter the filepath to read');
} 
else {
  fs.readFile(args[0], function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    console.log("Program Ended");
  });
}
