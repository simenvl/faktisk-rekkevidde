const fs = require("fs");
const Pool = require('pg').Pool;
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("../DB - Files/TB tests - Range.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    csvData.push(data);
  })
  .on("end", function () {
    // remove the first line: header
    csvData.shift();

    // connect to the PostgreSQL database
    
    });
    // save csvData
    //console.log(csvData)
  });

stream.pipe(csvStream);
