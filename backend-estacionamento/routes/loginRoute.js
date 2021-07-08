require("dotenv-safe").config();
const loginService = require("../service/loginService");

const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {

    const usuarioId = await loginService.buscarUsuario(req.body.user);
    if(isEmpty(usuarioId)){
        const id = usuarioId;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300
      });
      return res.json({ auth: true, token: token });
    } 
    res.status(500).json({message: 'Login inválido!'});
})

function isEmpty(obj) {
  if(obj[0] !== undefined){
    return true;
  } else {
    return false;
  }
}

module.exports = router;