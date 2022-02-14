const express = require('express');
const routes = require('./controllers');
// import the connection to Sequelize
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(require('./controllers/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
// set to true to drop and re-create all of the database tables on startup
// don't forget to set it back to false after re-creating the tables!
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening to the Curious Traveler!'));
});