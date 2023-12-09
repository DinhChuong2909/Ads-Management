import express from "express";
import positionService from "../services/position.service.js";
import posPendingService from "../services/posPending.service.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get('/phuong', async function (req, res) {
  try {
    const list = await positionService.findAll();
    const coordinatesList = list.map(item => [item.Lng, item.Lat]); // Lấy tọa độ từ danh sách dữ liệu
    
    // Lấy thông tin chi tiết của từng vị trí trong danh sách
    const positionInfoPromises = list.map(item => positionService.findById(item.Id));
    const positionInfo = await Promise.all(positionInfoPromises);
  
    res.render('phuong/phuongMap', {
      layout: 'phuongPage',
      list: list,
      empty: list.length === 0,
      coordinatesList: JSON.stringify(coordinatesList), // Truyền danh sách tọa độ vào handlebars
      positionInfo: JSON.stringify(positionInfo),
    });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/phuong/diadiem', async function (req, res) {
  try {
  const limit = 10;
  const page = req.query.page || 1;
  const offset = (page - 1) * limit;

  const total = await positionService.countAll();
  const nPages = Math.ceil(total / limit);
  const pageNumbers = [];
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push({
      value: i,
      isActive: i === +page
    });
  }

  const list = await positionService.findFromId(limit, offset);
  res.render('phuong/diadiem/list', {
    list: list,
    empty: list.length === 0,
    pageNumbers: pageNumbers,
    layout: 'phuongPage',
  });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
}
});

// diadiem/edit?id=6
router.get('/phuong/diadiem/edit', async function (req, res) {
  const id = req.query.id || 0;
  const category = await positionService.findById(id);
  if (!category) {
    return res.redirect('phuong/diadiem');
  }
  
  res.render('phuong/diadiem/edit', {
    category: category
  });
})

router.post('/del', async function (req, res) {
  await categoryService.del(req.body.CatID);
  res.redirect('/phuong/categories');
})

router.post('/patch', async function (req, res) {
  await categoryService.patch(req.body);
  res.redirect('/phuong/categories');
})

router.post('/phuong/diadiem/edit/add', async function (req, res) {
  try {
    const { PosID, HinhThucQC, DiaChi, Phuong, KhuVuc, NoiDungChinhSua, HinhAnh } = req.body;
    console.log(req.body)
    // Tạo một object chứa dữ liệu từ form
    const updatePos = {
      PosID,
      HinhThucQC,
      DiaChi,
      Phuong,
      KhuVuc,
      NoiDungChinhSua,
      HinhAnh,
      ThoiGian: new Date() // Thêm thời gian hiện tại khi người dùng submit
    };

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await posPendingService.add(updatePos); // Sử dụng posPendingService thay vì positionService

    res.status(201).send('Dữ liệu đã được ghi vào cơ sở dữ liệu!');
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error);
    res.status(500).send('Đã xảy ra lỗi khi ghi vào cơ sở dữ liệu!');
  }
});

export default router;