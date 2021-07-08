const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
<<<<<<< HEAD
    password: 'Senha123',
=======
    password: '1234',
>>>>>>> 21d829f77c01592f2dd12d82902eb1138ad54801
    host: 'localhost',
    port: '5432',
    database: 'estacionamento'
});

module.exports = db;