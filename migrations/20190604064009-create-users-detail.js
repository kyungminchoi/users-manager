'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usersDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userCode: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      userPw: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      phoneNum: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      userType: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.STRING
      },
      regDate: {
        type: Sequelize.STRING
      },
      regTime: {
        type: Sequelize.STRING
      },
      updateDate: {
        type: Sequelize.STRING
      },
      updateTimed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usersDetails');
  }
};