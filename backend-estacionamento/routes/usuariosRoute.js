const express = require("express");
const router = express.Router();
const usuariosService = require("../service/usuariosService");

router.post("/usuario", async function (req, res) {
  const usuario = req.body.usuario;
  const novoUsuario = await usuariosService.criarUsuario(usuario);
  res.json({message: "Usuário criado com sucesso!", id: novoUsuario.id})
});

router.put("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  const usuario = req.body.usuario;
  const alterarUsuario = await usuariosService.alterarUsuario(usuario, idUsuario);
  res.json({message: "Usuário editado com sucesso!"})
  res.json(alterarUsuario);
});

router.delete("/usuario/:id", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.deletarUsuario(idUsuario);
  res.json({message: "Usuário deletado com sucesso!", id: idUsuario})
});

router.patch("/usuario/:id/recuperar", async function (req, res) {
  const idUsuario = req.params.id;
  await usuariosService.recuperarUsuario(idUsuario);
  res.json({message: "Usuário restaurado com sucesso!", id: idUsuario})
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