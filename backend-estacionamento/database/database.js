const pgp = require('pg-promise')();
const db = pgp({
    user: 'ifsfjgnurbayrn',
    password: 'baf42e0db1f5955a5fce303894a85b631c2f90833b00c70a32dfc985b74fdae9',
    host: 'ec2-54-163-97-228.compute-1.amazonaws.com',
    port: '5432',
    database: 'd3c083q58tgrnu'
});

module.exports = db;