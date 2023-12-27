// Xem thống kê các báo cáo & cách thức xử lý của từng Phường, Quận -> Xang doing

import express from "express";
import phuongService from "../../services/phuong.service";
import quanService from "../../services/quan.service";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// DONT DELETE, XANG DOING THIS

router.get("/select-ward-district", async function (req, res) {
  try {
    const allWards = await phuongService.findAll();
    const allDistricts = await quanService.findAll();

    // render all list of Phuong & Quan
    res.render("/so/wardAndDistrictSeleection", {
      layout: "main",
      wardsList: allWards,
      districtsList: allDistricts,
    });
  } catch (error) {}
});

router.get("/statistics-ward:id", {
  async function(req, res) {
    try {
      const id = req.params.id;
      const data = await phuongService.findById(id);
      //render data of this id
    } catch (error) {}
  },
});

router.get("/statistics-district:id", {
  async function(req, res) {
    try {
      const id = req.params.id;
      const data = await quanService.findById(id);
      //render data of this id
    } catch (error) {}
  },
});

export default router;
