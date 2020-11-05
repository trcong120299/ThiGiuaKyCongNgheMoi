const express = require('express');
const route = express.Router();
const Data = require('./aws');

module.exports = route;

route.get('', (req, res) => {
    Data.getAll(res);
});

route.post('/add', (req, res) => {
    let sothutu = req.body.sothutu;
    let tenmaytinh = req.body.tenmaytinh;
    let hang = req.body.hang;
    let gia = req.body.gia;
    let chitiet = req.body.chitiet;

    Data.addItem(sothutu, tenmaytinh, hang, gia, chitiet, res);
});