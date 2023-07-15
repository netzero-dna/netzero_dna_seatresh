const Sequelize = require('sequelize');
const config = require('../config/config.json');

// 데이터베이스 연결
const {
  username, password, database, host, dialect,
} = config.production;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

// 모델 생성
const SeaTresh = require('./seatresh.js')(sequelize, Sequelize.DataTypes);

const db = {};
db.SeaTresh = SeaTresh;

module.exports = db;