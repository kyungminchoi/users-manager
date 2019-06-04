'use strict';
module.exports = (sequelize, DataTypes) => {
  const userState = sequelize.define('userState', {
    userCode: DataTypes.STRING,
    reviewCnt: DataTypes.NUMBER,
    visitCnt: DataTypes.NUMBER
  }, {});
  userState.associate = function(models) {
    // associations can be defined here
  };
  return userState;
};