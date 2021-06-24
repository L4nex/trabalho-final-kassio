const express = require("express");
const router = express.Router();
const usuariosService = require("../service/usuariosService");

router.post("/usuario", async function (req, res) {
  const usuario = req.body;
  const novoUsuario = await usuariosService.criarUsuario(usuario);
  res.json(novoUsuario);
});

router.put("/usuario", async function (req, res) {
  const usuario = req.body;
  const alterarUsuario = await usuariosService.alterarUsuario(usuario);
  res.json(alterarUsuario);
});

router.delete("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.deletaUsuario(idUsuario);
  res.json({message: "Registro excluido com sucesso!"})
});

router.patch("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.recuperarUsuario(idUsuario);
});

router.get("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  const usuario = await usuariosService.mostrarUsuario(idUsuario);
  res.json(usuario);
});

router.get("/usuarios", async function (req, res) {
    const usuarios = await usuariosService.listarUsuarios();
    res.json(usuarios)
});

module.exports = router;