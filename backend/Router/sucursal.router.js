// import the backend server creator
const express = require("express");
// create the sucursal routes
const sucursalRoutes = express.Router();
// import sucursal controllers
const { view_all_sucursals, view_all_cashiers } = require("../controllers/sucursal.controller.js");


// get all sucursals id
sucursalRoutes.get("/sucursals", (req, res) => {
    view_all_sucursals(req, res)
})

// get all cashiers by sucursal id
sucursalRoutes.get("/sucursal/cashiers/:id", (req, res) => {
    view_all_cashiers(req, res)
})

module.exports = sucursalRoutes;