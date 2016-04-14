var config = require("../config/config");
var Sequelize = global.$Sequelize = require("sequelize");
var sequelize = global.$sequelize = new Sequelize(config.database.dbname, config.database.username, config.database.password, config.database.connection);
var schema = require('./schema');


for (var name in schema) {
    global['$' + name] = sequelize.define(name, schema[name],{
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin'
    });
}

/**
 * 创建表
 */
sequelize.sync({force: true}).then(function (err) {
    if (err) {
        console.log('Unable to connect to the database:', err);
    } else {
        console.log('Connection has been established successfully.');
    }
});
