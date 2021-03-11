"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('tybox', 'z7', 'refe1526refe', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3309,
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map