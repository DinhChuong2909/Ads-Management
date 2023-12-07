import express from "express";
import positionService from "../../services/position.service.js";

const router = express.Router();

// /report?id=6
router.get('/report', async function (req, res) {
    const id = req.query.id || 0;
    console.log(id)
    const category = await positionService.findById(id);
    if (!category) {
      return res.redirect('/report');
    }
  
    res.render('people/report', {
      category: category
    });
  })

export default router;