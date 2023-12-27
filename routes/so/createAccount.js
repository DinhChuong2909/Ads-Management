// Tạo tài khoản cho các cán bộ Phường, Quận -> Xang doing

import express from "express";
import phuongService from "../../services/phuong.service";
import quanService from "../../services/quan.service";
import authenticationService from "../../services/authentication.service";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// DONT DELETE, XANG DOING THIS
router.get("/department-create-account", async function (req, res) {
  try {
    // thieu show wards and districts to Phân công khu vực quản lý (Phường, Quận) cho các tài khoản
    res.render("so/createAccount", { layout: "main" });
  } catch {}
});

router.post("/department-create-account", async function (req, res) {
  try {
    const user = {
      ID: Date.now().toString().slice(-4),
      Name: req.body.Name,
      Email: req.body.Email,
      Hashed_password: hashedPassword,
      Date_of_birth: convertStringToDate(req.body.DOB),
      Phone: req.body.Phone,
      Role: req.body.Role,
      // add ward, district management
    };
    await authenticationService.add(user);
  } catch {}
});

export default router;
