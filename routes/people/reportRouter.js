import express from "express";
import positionService from "../../services/position.service.js";

const router = express.Router();

router.get('/', function (req, res) {
    res.render('people/report');
})

router.post('/', async function (req, res) {
    // console.log(req.body);
    // const entity = {
    //   CatName: req.body.txtCatName
    // }
    const ret = await categoryService.add(req.body);
    console.log(ret); // inserted id

    res.render('people/report');
})