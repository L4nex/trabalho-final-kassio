const express = require("express");
const router = express.Router();
const mensalistasService = require("../service/mensalistasService");
const jwt = require('../jwtValidator');

router.post("/mensalista", jwt.validator, async function (req, res) {
  const mensalista = req.body.mensalista;
  const novoMensalista = await mensalistasService.criarMensalista(mensalista);
  res.json({ message: "Mensalista criado com sucesso!", id: novoMensalista.id })
});

router.put("/mensalista/:id",jwt.validator, async function (req, res) {
  const idMensalista = req.params.id;
  const mensalista = req.body.mensalista;
  const alterarMensalista = await mensalistasService.alterarMensalista(mensalista, idMensalista);
  res.json({ message: "Mensalista editado com sucesso!" });
  res.json(alterarMensalista);
});

router.delete("/mensalista/:id", jwt.validator, async function (req, res) {
  const idMensalista = req.params.id;
  await mensalistasService.deletarMensalista(idMensalista);
  res.json({ message: "Mensalista deletado com sucesso!", id: idMensalista })
});

router.patch("/mensalista/:id/recuperar",jwt.validator, async function (req, res) {
  const idMensalista = req.params.id;
  await mensalistasService.recuperarMensalista(idMensalista);
  res.json({ message: "Mensalista restaurado com sucesso!", id: idMensalista })
});

router.get("/mensalista/:id",jwt.validator, async function (req, res) {
  const idMensalista = req.params.id;
  const mensalista = await mensalistasService.mostrarMensalista(idMensalista);
    if (mensalista != ""){ 
      return res.json(mensalista);
  }else {
    return res.json({ error: 'Mensalista não encontrado', id: idMensalista})
  } 
});

router.get("/mensalistas",jwt.validator, async function (req, res) {
  const mensalistas = await mensalistasService.listarMensalistas();
  res.json(mensalistas)
});

module.exports = router;