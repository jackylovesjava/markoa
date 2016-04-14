var Sequelize = require("sequelize");

/**
 * Session表
 */
exports.Sessions = {
    sid: {type: Sequelize.STRING(100), allowNull: false, unique: true},
    data: {type: Sequelize.TEXT}
}

exports.Users = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    first_name: {type: Sequelize.STRING(32), allowNull: true},
    last_name: {type: Sequelize.STRING(32), allowNull: true},
    email: {type: Sequelize.STRING(50), allowNull: true, unique: true},
    image: {type: Sequelize.STRING(191), allowNull: true},
    last_seen: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    last_login: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
};
