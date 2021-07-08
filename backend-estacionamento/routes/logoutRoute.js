const express = require("express");
const router = express.Router();

router.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});

module.exports = router;