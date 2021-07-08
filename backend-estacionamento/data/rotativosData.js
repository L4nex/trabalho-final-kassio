const database = require('../database/database')

exports.criarRotativo = function(rotativo){
    return database.one(
    'INSERT INTO public.rotativos("placa", "tipo_veiculo", "data_entrada", "active") VALUES ($1, $2, $3, true) returning *',
    [rotativo.placa, rotativo.tipo_veiculo, new Date()])
}

exports.alterarRotativo = function(rotativo, id){
    return database.none(
        'UPDATE public.rotativos SET placa=$1, tipo_veiculo=$2 WHERE id=$3;',
        [rotativo.placa, rotativo.tipo_veiculo, id]
    )
}
exports.deletarRotativo = function(id){
    return database.none(
        'UPDATE public.rotativos SET active = false WHERE id=$1;',
        [id]
    )
}

exports.recuperarRotativo = function(id){
    return database.none(
        'UPDATE public.rotativos SET active = true WHERE id=$1;',
        [id]
    )
}

exports.mostrarRotativo = function(id){
    return database.query(
        'SELECT * FROM public.rotativos where id = $1;',
        [id]
    )
}
exports.listarRotativos = function(){
    return database.query(
        'SELECT * FROM public.rotativos WHERE active = true;'
    )
}

exports.retornaData = function(id){
    return database.one(
        'SELECT data_entrada FROM public.rotativos WHERE id = $1',
        [id]
    );
}
