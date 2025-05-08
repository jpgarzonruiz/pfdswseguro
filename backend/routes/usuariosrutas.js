const express = require("express");
const router = express.Router();
const usuarioscontroller = require("../modelo/usuariosmodelo.js");

router.get("/",usuarioscontroller.consultarDetalle);
router.post("/",usuarioscontroller.ingresar);

/* Ejemplo con parámetros */

router.route("/:iden")
.get(usuarioscontroller.consultarDetalle);
/*
.put(usuarioscontroller.actualizar)
.delete(usuarioscontroller.borrar);
*/

module.exports = router;
