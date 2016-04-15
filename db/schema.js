var Sequelize = require("sequelize");

/**
 * Session表
 */
exports.Sessions = {
    sid: {type: Sequelize.STRING(100), allowNull: false, unique: true},
    data: {type: Sequelize.TEXT}
};

exports.Users = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    user_name: {type: Sequelize.STRING(32), allowNull: true},
    password: {type: Sequelize.STRING(32), allowNull: true},
    qq: {type: Sequelize.STRING(15), allowNull: true, unique: true},
    phone_number: {type: Sequelize.STRING(15), allowNull: true, unique: true},
    email: {type: Sequelize.STRING(50), allowNull: true, unique: true},
    alipay_account_number: {type: Sequelize.STRING(50), allowNull: true},
    alipay_account_name: {type: Sequelize.STRING(50), allowNull: true},
    invite_user_id: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: false},
    fan_number: {type: Sequelize.INTEGER, defaultValue: 0},
    register_date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
};
