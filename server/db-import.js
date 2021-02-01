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
    /*pool = new Pool({
      host: "localhost",
      user: "postgres",
      database: "ev",
      password: "Feynb241",
      port: 5432
    });

    const query =
      "INSERT INTO ev_range (id, car, season, surface, temp, tires, wheel_front, wheel_rear, speed, wh_km, capacity, distance_km, distance_mi) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";

    pool.connect((err, client, done) => {
      if (err) throw err;
      try {
        csvData.forEach(row => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });*/
    // save csvData
    //console.log(csvData)
  });

stream.pipe(csvStream);