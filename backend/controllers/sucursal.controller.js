// import JSON management functions
const { saveAccountData,
    getAccountData } = require("../DB/account.DB");
require("dotenv").config();

// get all sucursals id
function view_all_sucursals(req, res) {
    var sucursals = Object.keys(getAccountData("sucursals.json"));
    res.send(sucursals);
}

// get all cashiers by sucursal id
function view_all_cashiers(req, res) {
    process.env.CAHIER_ID = 0
    var sucursal_id = req.params.id;
    var cashiers = getAccountData("sucursals.json")[sucursal_id]["cashiers"];

    res.send(cashiers);
}

module.exports = { view_all_sucursals, view_all_cashiers };