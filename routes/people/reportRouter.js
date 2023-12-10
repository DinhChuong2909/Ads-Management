import express from "express";
import positionService from "../../services/position.service.js";
import reportService from "../../services/report.service.js";

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

router.post('/report', async function (req, res) {
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
      HinhAnh: req.body.form__file,
      ThoiGian: req.body.form__timestamp
    };
    console.log(entity)
    const ret = await reportService.add(entity);
    console.log(ret);

    res.redirect('/');
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: error.message });
  }
});

export default router;