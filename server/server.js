if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const app = express();

const path = require('path');

const db = require('./db');

const csvImport = require('./db-import');

const loginRouter = require("../routes/login");
const bilerRouter = require("../routes/biler");
const indexRouter = require("../routes/index");
const apiCarsRouter = require("../routes/api-cars");


/*CREATE TABLE ev_range(
  id integer NOT NULL,
  car VARCHAR(255) NOT NULL,
  season VARCHAR(255) NOT NULL,
  surface VARCHAR(255) NOT NULL,
  temp VARCHAR(5) NOT NULL,
  tires VARCHAR(255),
  wheel_front VARCHAR(255),
  wheel_rear VARCHAR(255),
  speed float NOT NULL,
  wh_km float NOT NULL,
  capacity float NOT NULL,
  distance_km float NOT NULL,
  distance_mi float NOT NULL
  );*/

// config

app.use(express.static(path.join(__dirname + '/../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

app.get('/', loginRouter); 
app.get('/biler', bilerRouter); 
app.get('/test', indexRouter);
app.get('/api/cars', apiCarsRouter);

const port = process.env.PORT || 8080;

app.listen(port);