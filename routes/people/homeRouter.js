import express from "express";
import positionService from "../../services/position.service.js";
import reportService from "../../services/report.service.js";

const router = express.Router();


// Home Route
router.get('/', async function (req, res) {
  try {
    const list = await positionService.findAll();
    const coordinatesList = list.map(item => [item.Lng, item.Lat]);

    const positionInfoPromises = list.map(item => positionService.findById(item.Id));
    const positionInfo = await Promise.all(positionInfoPromises);

    const positionData = await positionService.findAll();
    const reportData = await reportService.findAll();
    // console.log(positionData)
    // console.log(reportData)
    const combinedData = [];

    reportData.forEach(reportItem => {
      const matchingPositionItem = positionData.find(positionItem => positionItem.Id === reportItem.AdsID);
      if (matchingPositionItem) {
        combinedData.push({ ...reportItem, ...matchingPositionItem });
      }
    });

    const dataForTemplate = combinedData.map(item => {
      let HinhThucReportDisplay = "";
      switch (item.HinhThucReport) {
        case "Lựa chọn hình thức báo cáo":
          HinhThucReportDisplay = "Tùy Chọn";
          break;
        case "1":
          HinhThucReportDisplay = "Tố giác sai phạm";
          break;
        case "2":
          HinhThucReportDisplay = "Đăng ký nội dung";
          break;
        case "3":
          HinhThucReportDisplay = "Đóng góp ý kiến";
          break;
        case "4":
          HinhThucReportDisplay = "Giải đáp thắc mắc";
          break;
        default:
          HinhThucReportDisplay = item.HinhThucReport;
          break;
      }

      const NoiDungBaoCaoDisplay = item.NoiDungBaoCao ? `<div>${item.NoiDungBaoCao}</div>` : "Không cung cấp lý do cụ thể";
      const HinhAnhDisplay = item.HinhAnh ? `<img src="${item.HinhAnh}" alt="Hình ảnh" />` : "Không có hình ảnh";

      return {
        ...item,
        HinhThucReportDisplay,
        NoiDungBaoCaoDisplay,
        HinhAnhDisplay,
      };
    });

    res.render('people/home', {
      list: list,
      empty: list.length === 0,
      coordinatesList: JSON.stringify(coordinatesList),
      positionInfo: JSON.stringify(positionInfo),
      combinedData: dataForTemplate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


export default router;
