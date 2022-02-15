const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'trfina',
    email: 'finatammy@gmail.com',
    password: 'password123'
  },
  {
    username: 'ShyF',
    email: 'fleetwoodshybreasia@gmail.com',
    password: 'password234'
  },
  {
    username: 'cmerrym1',
    email: 'cmerrym1@kent.edu',
    password: 'password345'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
