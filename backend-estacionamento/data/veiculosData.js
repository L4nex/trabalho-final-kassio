const database = require('../database/database')

exports.criarVeiculo = function(veiculo, idMensalista){
    return database.one(
    'INSERT INTO public.veiculos("placa", "tipo_veiculo", "mensalista_id", "active") VALUES ($1, $2, $3, $4) returning *',
    [veiculo.placa, veiculo.tipo_veiculo, idMensalista, true])
}

exports.alterarVeiculo = function(veiculo, id){
    return database.none(
        'UPDATE public.veiculos SET placa=$1, tipo_veiculo=$2 WHERE id=$3;',
        [veiculo.placa, veiculo.tipo_veiculo, id]
    )
}
exports.deletarVeiculo = function(id){
    return database.none(
        'UPDATE public.veiculos SET active = false WHERE id=$1;',
        [id]
    )
}

exports.recuperarVeiculo = function(id){
    return database.none(
        'UPDATE public.veiculos SET active = true WHERE id=$1;',
        [id]
    )
}

exports.mostrarVeiculo = function(id){
    return database.query(
        'SELECT * FROM public.veiculos WHERE id = $1;',
        [id]
    )
}
exports.listarVeiculos = function(idMensalista){
    return database.query(
        'SELECT * FROM public.veiculos WHERE mensalista_id = $1 AND active = true;',
        [idMensalista]
    )
}