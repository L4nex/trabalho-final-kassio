const express = require("express");
const router = express.Router();
const veiculosService = require("../service/veiculosService");

router.post("/veiculo", async function (req, res) {
  const veiculo = req.body;
  const novoVeiculo = await veiculosService.criarVeiculo(veiculo);
  res.json(novoVeiculo);
});

router.put("/veiculo", async function (req, res) {
  const veiculo = req.body;
  const alterarVeiculo = await veiculosService.alterarVeiculo(veiculo);
  res.json(alterarVeiculo);
});

router.delete("/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  await veiculosService.deletarVeiculo(idVeiculo);
}); 

router.patch("/veiculo/:id/recuperar", async function (req, res) {
    const idVeiculo = req.params.id;
    await veiculosService.recuperarVeiculo(idVeiculo);
  });

router.get("/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  const veiculo = await veiculosService.mostrarVeiculo(idVeiculo);
  res.json(veiculo);
});

router.get("/veiculos", async function (req, res) {
    const veiculos = await veiculosService.listarVeiculos();
    res.json(veiculos)
});

module.exports = router;