
const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
// const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:Geronimo62#@localhost/capstone-api', {logging: false});

const sequelize = new Sequelize('capstone-api', 'root', 'Geronimo62#', {
    host: 'localhost', 
    dialect: 'mysql'
  });

//Make sure you run this: npm install sqlite3 --save
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

module.exports = {sequelize};