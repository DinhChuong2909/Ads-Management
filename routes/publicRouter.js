import express from "express";
import positionService from "../services/position.service.js";

const router = express.Router();

router.get('/', async function (req, res) {
  try {
    const list = await positionService.findAll();
    const coordinatesList = list.map(item => [item.Lng, item.Lat]); // Lấy tọa độ từ danh sách dữ liệu
    
    // Lấy thông tin chi tiết của từng vị trí trong danh sách
    const positionInfoPromises = list.map(item => positionService.findById(item.Id));
    const positionInfo = await Promise.all(positionInfoPromises);

    res.render('publicPage', {
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


export default router;
