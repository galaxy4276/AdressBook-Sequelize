'use strict';

const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {}; 
const sequelize = new Sequelize(config.database, config.username,
  config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Post = require('./Post')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

db.Post.hasOne(db.User, {
  foreignKey: 'id',
});
db.User.hasMany(db.Post, {
  foreignKey: 'id',
});


module.exports = db;
