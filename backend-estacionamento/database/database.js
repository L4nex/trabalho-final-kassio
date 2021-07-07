const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'Senha123',
    host: 'localhost',
    port: '5432',
    database: 'd3c083q58tgrnu'
});

module.exports = db;