import express from "express";
import positionService from "../services/position.service.js";

const router = express.Router();

router.get('/phuong', async function (req, res) {
  try {
  const list = await positionService.findAll();
  // const id = temp.length || 0;
  // console.log(id)
  // const limit = 4;
  // const page = req.query.page || 1;
  // const offset = (page - 1) * limit;

  // const total = await positionService.countById(id);
  // const nPages = Math.ceil(total / limit);
  // const pageNumbers = [];
  // for (let i = 1; i <= nPages; i++) {
  //   pageNumbers.push({
  //     value: i,
  //     isActive: i === +page
  //   });
  // }

  // const list = await positionService.findPageById(id, limit, offset);
  console.log(list);
  const coordinatesList = list.map(item => [item.Lng, item.Lat]); // Lấy tọa độ từ danh sách dữ liệu
  
  // Lấy thông tin chi tiết của từng vị trí trong danh sách
  const positionInfoPromises = list.map(item => positionService.findById(item.Id));
  const positionInfo = await Promise.all(positionInfoPromises);
  res.render('phuong/list', {
    list: list,
    empty: list.length === 0,
    // pageNumbers: pageNumbers,
    coordinatesList: JSON.stringify(coordinatesList), // Truyền danh sách tọa độ vào handlebars
    positionInfo: JSON.stringify(positionInfo),
  });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
}
});

router.get('/add', function (req, res) {
  res.render('phuong/add');
})

router.post('/add', async function (req, res) {
  const ret = await categoryService.add(req.body);
  console.log(ret); // inserted id

  res.render('phuong/add');
})

// admin/categories/edit?id=6
router.get('/edit', async function (req, res) {
  const id = req.query.id || 0;
  const category = await categoryService.findById(id);
  if (!category) {
    return res.redirect('/phuong/categories');
  }

  res.render('phuong/edit', {
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

export default router;