const database = require('../database/database')

exports.criarUsuario = function(usuario){
    return database.one(
    'INSERT INTO public.usuarios("nome", "email", "telefone", "senha", "foto", "tipo_usuario", "data_criacao", "data_atualizacao") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    [usuario.nome, usuario.email, usuario.telefone, usuario.senha, usuario.foto, usuario.tipo_usuario, new Date(), new Date()])
}

exports.alterarUsuario = function(usuario){
    return database.query(
        'UPDATE public.usuarios SET nome=$1, email=$2, telefone=$3, senha=$4, foto=$5, tipo_usuario=$6, data_atualizacao=$7 WHERE id=$8;',
        [usuario.nome, usuario.email, usuario.telefone, usuario.senha, usuario.foto, usuario.tipo_usuario, new Date(), usuario.id]
    )
}
exports.deletarUsuario = function(id){
    return database.query(
        'UPDATE public.usuarios SET active = false WHERE id=$1; returning *',
        [id]
    )
}

exports.mostrarUsuario = function(id){
    return database.query(
        'SELECT * FROM public.usuarios where id = $1;',
        [id]
    )
}

exports.recuperarUsuario = function(id){
    return database.one(
        'UPDATE public.usuarios SET active = true WHERE id=$1; returning *',
        [id]
    )
}

exports.listarUsuarios = function(){
    return database.query(
        'SELECT * FROM public.usuarios;'
    )
}