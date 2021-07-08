const database = require('../database/database')

exports.buscarUsuario = function(user){
    return database.query(
        'SELECT id FROM  public.usuarios WHERE email = $1 AND senha = $2;', [user.email, user.senha]
    );
}
