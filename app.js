const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongodbSessionStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
require('dotenv').config();

const exampleRoutes = require('./routes/example-routes');

const app = express();

const sessionStore = new mongodbSessionStore({
  uri: process.env.MONGO_URI,
  collection: 'session',
  expires: 100 * 60 * 60 * 24, // setting session life for 24 hours in the database
});

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
  })
);
app.use(flash());
// app.use(express.json());

const PORT = process.env.PORT;

app.use(exampleRoutes);

app.use('/', (req, res, next) => {
  res.render('error/page-not-found');
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(PORT, () => console.log(`server running at port ${PORT}.....`))
  );
