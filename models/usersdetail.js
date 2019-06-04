'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersDetail = sequelize.define('usersDetail', {
    userCode: DataTypes.STRING,
    userId: DataTypes.STRING,
    userPw: DataTypes.STRING,
    name: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    email: DataTypes.STRING,
    userType: DataTypes.STRING,
    birth: DataTypes.STRING,
    regDate: DataTypes.STRING,
    regTime: DataTypes.STRING,
    updateDate: DataTypes.STRING,
    updateTimed: DataTypes.STRING
  }, {});
  usersDetail.associate = function(models) {
    // associations can be defined here
  };
  return usersDetail;
};