const database = require('../database/database')

exports.criarMensalista = function(mensalista){
    return database.one(
    'INSERT INTO public.mensalistas("nome", "cpf", "data_entrada") VALUES ($1, $2, $3) returning *',
    [mensalista.nome, mensalista.cpf, new Date()])
}

exports.alterarMensalista = function(mensalista, id){
    return database.none(
        'UPDATE public.mensalistas SET nome=$1, cpf=$2 WHERE id=$3;',
        [mensalista.nome, mensalista.cpf, id]
    )
}
exports.deletarMensalista = function(id){
    return database.none(
        'UPDATE public.mensalistas SET active = false WHERE id=$1;',
        [id]
    )
}

exports.recuperarMensalista = function(id){
    return database.none(
        'UPDATE public.mensalistas SET active = true WHERE id=$1;',
        [id]
    )
}

exports.mostrarMensalista = function(id){
    return database.query(
        'SELECT * FROM public.mensalistas where id = $1;',
        [id]
    )
}
exports.listarMensalistas = function(){
    return database.query(
        'SELECT * FROM public.mensalistas WHERE active = true;'
    )
}

exports.retornaData = function(id){
    return database.query(
        'SELECT data_entrada FROM public.mensalistas WHERE id = $1',
        [id]
    );
}