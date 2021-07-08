const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'Senha123',
    host: 'localhost',
    port: '5432',
    database: 'estacionamento'
});

module.exports = db;