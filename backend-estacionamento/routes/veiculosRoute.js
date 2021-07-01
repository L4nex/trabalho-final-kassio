const express = require("express");
const router = express.Router();
const veiculosService = require("../service/veiculosService");

router.post("/mensalista/:idMensalista/veiculo", async function (req, res) {
  const veiculo = req.body.veiculo;
  const idMensalista = req.params.idMensalista;
  const novoVeiculo = await veiculosService.criarVeiculo(veiculo, idMensalista);
  res.json({ message: "Veiculo criado com sucesso!", id: novoVeiculo.id })
});

router.put("/mensalista/:idMensalista/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  const veiculo = req.body.veiculo;
  const alterarVeiculo = await veiculosService.alterarVeiculo(veiculo, idVeiculo);
  res.json({ message: "Veiculo editado com sucesso!" });
  res.json(alterarVeiculo);
});

router.delete("/mensalista/:idMensalista/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  await veiculosService.deletarVeiculo(idVeiculo);
  res.json({ message: "Veiculo deletado com sucesso!", id: idVeiculo })
});

router.patch("/mensalista/:idMensalista/veiculo/:id/recuperar", async function (req, res) {
  const idVeiculo = req.params.id;
  await veiculosService.recuperarVeiculo(idVeiculo);
  res.json({ message: "Veiculo restaurado com sucesso!", id: idVeiculo })
});

router.get("/mensalista/:idMensalista/veiculo/:id", async function (req, res) {
  const idVeiculo = req.params.id;
  const veiculo = await veiculosService.mostrarVeiculo(idVeiculo);
    if (veiculo != ""){ 
      return res.json(veiculo);
  }else {
    return res.json({ error: 'Veiculo não encontrado', id: idVeiculo})
  } 
});

router.get("/mensalista/:idMensalista/veiculos", async function (req, res) {
  const idMensalista = req.params.idMensalista;
  const veiculos = await veiculosService.listarVeiculos(idMensalista);
  res.json(veiculos)
});

module.exports = router;