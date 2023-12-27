import express from "express";
import phuongService from "../../services/phuong.service";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// Cán bộ Quận có thể lựa chọn các Phường mình quan tâm để xử lý -> Xang doing

// DONT DELETE, XANG DOING THIS
router.get("/quan-select-quantam", async function (req, res) {
  const isQuan = req.user.role === "cbquan";

  if (isQuan) {
    // check: true -> render cac phuong cua quan

    // get all Phuong in Quan
    const idQuan = req.body.ID; // or add district in accounts
    const phuongInQuan = await phuongService.findPhuongThuocQuan(idQuan);

    // render list of Phuong for Can Bo to choose
    res.render("/");
    res.render("quan/selectPhuongQuanTam", {
      layout: "main",
      wardList: phuongInQuan,
    });
  } else {
    res.redirect("/quan"); // edit later
  }
});

// DONT DELETE, XANG DOING THIS
router.post("/quan-selected-quantam", async function (req, res) {
  try {
    // after Can bo choose Phuong -> receive list of Phuong -> solve Wards
  } catch (error) {}
});

// DONT DELETE, XANG DOING THIS
router.post("/quan-selected", async function (req, res) {
  try {
    const selectedPhuong = req.body.selectedPhuong;

    // render list of Ads in that Phuong
  } catch (error) {}
});

export default router;
