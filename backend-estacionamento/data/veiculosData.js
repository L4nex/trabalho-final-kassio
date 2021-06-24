const database = require('../database/database')

exports.criarVeiculo = function(veiculo){
    return database.one(
    'INSERT INTO public.veiculos("placa", "cor_veiculo", "tipo_veiculo") VALUES ($1, $2, $3) returning *',
    [veiculo.placa, veiculo.cor_veiculo, veiculo.tipo_veiculo])
}

exports.alterarVeiculo = function(veiculo){
    return database.one(
        'UPDATE public.veiculos SET placa=$1, cor_veiculo=$2, tipo_veiculo=$3 WHERE id=$4;',
        [veiculo.placa, veiculo.cor_veiculo, veiculo.tipo_veiculo, veiculo.id]
    )
}
exports.deletarVeiculo = function(id){
    return database.one(
        'UPDATE public.veiculos SET active = false WHERE id=$1; returning *',
        [id]
    )
}

exports.recuperarVeiculo = function(id){
    return database.one(
        'UPDATE public.veiculos SET active = true WHERE id=$1; returning *',
        [id]
    )
}

exports.mostrarVeiculo = function(id){
    return database.one(
        'SELECT * FROM public.veiculos where id = $1;',
        [id]
    )
}
exports.listarVeiculos = function(){
    return database.query(
        'SELECT * FROM public.veiculos;'
    )
}