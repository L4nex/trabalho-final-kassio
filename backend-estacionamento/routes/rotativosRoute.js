const express = require("express");
const router = express.Router();
const rotativosService = require("../service/rotativosSerivce");
const jwt = require('../jwtValidator');

router.post("/rotativo",jwt.validator, async function (req, res) {
  const rotativo = req.body.rotativo;
  const novoRotativo = await rotativosService.criarRotativo(rotativo);
  res.json({ message: "Rotativo criado com sucesso!", id: novoRotativo.id })
});

router.put("/rotativo/:id",jwt.validator, async function (req, res) {
  const idRotativo = req.params.id;
  const rotativo = req.body.rotativo;
  const alterarRotativo = await rotativosService.alterarRotativo(rotativo, idRotativo);
  res.json({ message: "Rotativo editado com sucesso!" });
  res.json(alterarRotativo);
});

router.delete("/rotativo/:id",jwt.validator, async function (req, res) {
  const idRotativo = req.params.id;
  await rotativosService.deletarRotativo(idRotativo);
  res.json({ message: "Rotativo deletado com sucesso!", id: idRotativo })
});

router.patch("/rotativo/:id/recuperar",jwt.validator, async function (req, res) {
  const idRotativo = req.params.id;
  await rotativosService.recuperarRotativo(idRotativo);
  res.json({ message: "Rotativo restaurado com sucesso!", id: idRotativo })
});

router.get("/rotativo/:id",jwt.validator, async function (req, res) {
  const idRotativo = req.params.id;
  const rotativo = await rotativosService.mostrarRotativo(idRotativo);
    if (rotativo != ""){ 
      return res.json(rotativo);
  }else {
    return res.json({ error: 'Rotativo não encontrado', id: idRotativo})
  } 
});

router.get("/rotativos",jwt.validator, async function (req, res) {
  const rotativos = await rotativosService.listarRotativos();
  res.json(rotativos)
});

router.get("/pagamentoRotativo/:id", jwt.validator, async function (req, res) {
  const rotativo = await rotativosService.retornaData(req.params.id);
  var diff = Math.abs(rotativo.data_entrada - new Date());
  var minutes = Math.floor((diff/1000)/60);
  var hours = Math.floor(minutes/60);
  var days = Math.floor(hours/24);
  let valorPagar = 0;
  if (minutes > 300) {
    valorPagar = 30 * days;
  } else {
    valorPagar = minutes * 0.15;
  }
  res.json(valorPagar);
});

module.exports = router;