import { Sequelize } from 'sequelize';

const db = new Sequelize('tybox', 'z7', 'refe1526refe', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3309,
    //logging: false,
});

export default db;
