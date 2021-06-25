const express = require("express");
const router = express.Router();
const veiculosService = require("../service/veiculosService");

router.post("/veiculo", async function (req, res) {
  const veiculo = req.body.veiculo;
  const novoVeiculo = await veiculosService.criarVeiculo(veiculo);
  res.json({ message: "Veículo criado com sucesso!", id: novoVeiculo.id })
});

router.put("/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  const veiculo = req.body.veiculo;
  const alterarVeiculo = await veiculosService.alterarVeiculo(veiculo, idVeiculo);
  res.json({ message: "Veículo editado com sucesso!" });
  res.json(alterarVeiculo);
});

router.delete("/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  await veiculosService.deletarVeiculo(idVeiculo);
  res.json({ message: "Veículo deletado com sucesso!", id: idVeiculo })
});

router.patch("/veiculo/:id/recuperar", async function (req, res) {
  const idVeiculo = req.params.id;
  await veiculosService.recuperarVeiculo(idVeiculo);
  res.json({ message: "Veículo restaurado com sucesso!", id: idVeiculo })
});

router.get("/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  const veiculo = await veiculosService.mostrarVeiculo(idVeiculo);
    if (veiculo != ""){ 
      return res.json(veiculo);
  }else {
    return res.json({ error: 'Veículo não encontrado', id: idVeiculo})
  } 
});

router.get("/veiculos", async function (req, res) {
  const veiculos = await veiculosService.listarVeiculos();
  res.json(veiculos)
});

module.exports = router;