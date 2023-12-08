import express from "express";
import positionService from "../../services/position.service.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

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

// Endpoint để nhận dữ liệu từ form
router.post('/', async (req, res) => {
  try {
    const { HinhThucReport, HoTen, Email, SDT, NoiDungBaoCao, HinhAnh } = req.body;
    console.log(HinhThucReport)
    // Tạo một object chứa dữ liệu từ form
    const reportData = {
      HinhThucReport,
      HoTen,
      Email,
      SDT,
      NoiDungBaoCao,
      HinhAnh,
      ThoiGian: new Date() // Thêm thời gian hiện tại khi người dùng submit
    };

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await reportService.add(reportData); // Sử dụng reportService thay vì positionService

    res.status(201).send('Dữ liệu đã được ghi vào cơ sở dữ liệu!');
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error);
    res.status(500).send('Đã xảy ra lỗi khi ghi vào cơ sở dữ liệu!');
  }
});

export default router;