const express = require("express");
const router = express.Router();
const rotativosService = require("../service/rotativosSerivce");

router.post("/rotativo", async function (req, res) {
  const rotativo = req.body.rotativo;
  const novoRotativo = await rotativosService.criarRotativo(rotativo);
  res.json({ message: "Rotativo criado com sucesso!", id: novoRotativo.id })
});

router.put("/rotativo/:id", async function (req, res) {
  const idRotativo = req.params.id;
  const rotativo = req.body.rotativo;
  const alterarRotativo = await rotativosService.alterarRotativo(rotativo, idRotativo);
  res.json({ message: "Rotativo editado com sucesso!" });
  res.json(alterarRotativo);
});

router.delete("/rotativo/:id", async function (req, res) {
  const idRotativo = req.params.id;
  await rotativosService.deletarRotativo(idRotativo);
  res.json({ message: "Rotativo deletado com sucesso!", id: idRotativo })
});

router.patch("/rotativo/:id/recuperar", async function (req, res) {
  const idRotativo = req.params.id;
  await rotativosService.recuperarRotativo(idRotativo);
  res.json({ message: "Rotativo restaurado com sucesso!", id: idRotativo })
});

router.get("/rotativo/:id", async function (req, res) {
  const idRotativo = req.params.id;
  const rotativo = await rotativosService.mostrarRotativo(idRotativo);
    if (rotativo != ""){ 
      return res.json(rotativo);
  }else {
    return res.json({ error: 'Rotativo não encontrado', id: idRotativo})
  } 
});

router.get("/rotativos", async function (req, res) {
  const rotativos = await rotativosService.listarRotativos();
  res.json(rotativos)
});

module.exports = router;