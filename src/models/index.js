'use strict';

const Sequelize = require('sequelize');
const path = require('path');
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
