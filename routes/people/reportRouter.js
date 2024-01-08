import express from "express";
import positionService from "../../services/position.service.js";
import reportService from "../../services/report.service.js";

import multer from 'multer';
import path from 'path';

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// /report?id=6
router.get('/report', async function (req, res) {
  const id = req.query.id || 0;
  console.log(id)
  const category = await positionService.findById(id);
  if (!category) {
    return res.redirect('/');
  }

  console.log('Category:', category); // In ra toàn bộ category để kiểm tra dữ liệu
  console.log('Lat:', category.Lat); // In ra giá trị của Lat từ category
  console.log('Lng:', category.Lng); // In ra giá trị của Lng từ category


  res.render('people/report', {
    infoId: id,
    category: category,
    Lat: category.Lat,
    Lng: category.Lng
  });
})

// Khởi tạo Multer và cấu hình nơi lưu trữ file tải lên
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Thư mục lưu trữ file tải lên
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.post('/report', upload.single('form__file'), async function (req, res) {
  try {
    const entity = {
      Lat: req.body.Lat,
      Lng: req.body.Lng,
      AdsID: req.body.adId,
      HinhThucReport: req.body.form__type,
      HoTen: req.body.form__name,
      Email: req.body.form__email,
      SDT: req.body.form__phone__number,
      NoiDungBaoCao: req.body.textarea,
      HinhAnh: req.file ? req.file.path : null,
      ThoiGian: req.body.form__timestamp
    };
    // console.log(entity)
    const ret = await reportService.add(entity);
    // console.log(ret);

    // if (req.file) {
    //   console.log("Nội dung của file:", req.file);
    // } else {
    //   console.log("Không có file được tải lên");
    // }


    res.redirect('/');
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: error.message });
  }
});

export default router;