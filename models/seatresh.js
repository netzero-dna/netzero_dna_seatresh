'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeaTresh extends Model {}
  SeaTresh.init({
    local: DataTypes.STRING,
    location: DataTypes.STRING,
    count: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    size: DataTypes.FLOAT,
    objective_size: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'SeaTresh',
  });
  return SeaTresh;
};