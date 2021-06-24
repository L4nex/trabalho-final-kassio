const express = require("express");
const router = express.Router();
const usuariosService = require("../service/usuariosService");

router.post("/usuario", async function (req, res) {
  const usuario = req.body;
  const novoUsuario = await usuariosService.criarUsuario(usuario);
  res.json({message: "Usuário criado com sucesso!"})
  res.json(novoUsuario);
});

router.put("/usuario", async function (req, res) {
  const usuario = req.body;
  const alterarUsuario = await usuariosService.alterarUsuario(usuario);
  res.json({message: "Usuário editado com sucesso!"})
  res.json(alterarUsuario);
});

router.delete("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.deletaUsuario(idUsuario);
  res.json({message: "Usuário deletado com sucesso!"})
  res.json(idUsuario);
});

router.patch("/usuario/:id/recuperar", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.recuperarUsuario(idUsuario);
  res.json({message: "Usuário restaurado com sucesso!"})
  res.json(idUsuario);
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