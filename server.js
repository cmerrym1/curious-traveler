const express = require('express');
const routes = require('./routes');
// import the connection to Sequelize
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// set to true to drop and re-create all of the database tables on startup
// don't forget to set it back to false after re-creating the tables!
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening to the Curious Traveler!'));
});