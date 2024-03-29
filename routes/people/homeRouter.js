import express from 'express'
import positionService from '../../services/position.service.js'
import reportService from '../../services/report.service.js'

const router = express.Router()

function getFileType(fileUrl) {
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  const videoExtensions = ['.mp4', '.mov', '.avi']; // Add more video extensions as needed

  const extension = fileUrl.substr(fileUrl.lastIndexOf('.')).toLowerCase();

  if (imageExtensions.includes(extension)) {
    return 'image';
  } else if (videoExtensions.includes(extension)) {
    return 'video';
  } else {
    return 'unknown'; // If the extension doesn't match either image or video
  }
}

router.get('/', async function (req, res) {
  try {
    const list = await positionService.findAll()
    const coordinatesList = list.map((item) => [item.Lng, item.Lat])

    const positionInfoPromises = list.map((item) => positionService.findById(item.Id))
    const positionInfo = await Promise.all(positionInfoPromises)

    // console.log(positionInfo)
    const positionInfoNew = positionInfo.map((item) => {
      // console.log(item.HinhAnh.replace(/\\/g, '/'))
      const HinhAnhDisplay = item.HinhAnh ? item.HinhAnh.replace(/\\/g, '/') : null

      return {
        ...item,
        HinhAnhDisplay,
      }
    })

    const positionData = await positionService.findAll()
    const reportData = await reportService.findAll()

    // console.log(reportData)
    const combinedData = []

    reportData.forEach((reportItem) => {
      const matchingPositionItem = positionData.find((positionItem) => positionItem.Id == reportItem.AdsID)
      if (matchingPositionItem) {
        combinedData.push({ ...reportItem, ...matchingPositionItem, HinhAnh: reportItem.HinhAnh })
      }
    })

    // console.log(combinedData)

    const dataForTemplate = combinedData.map((item) => {
      let HinhThucReportDisplay = ''
      switch (item.HinhThucReport) {
        case '0':
          HinhThucReportDisplay = 'Tùy Chọn'
          break
        case '1':
          HinhThucReportDisplay = 'Tố giác sai phạm'
          break
        case '2':
          HinhThucReportDisplay = 'Đăng ký nội dung'
          break
        case '3':
          HinhThucReportDisplay = 'Đóng góp ý kiến'
          break
        case '4':
          HinhThucReportDisplay = 'Giải đáp thắc mắc'
          break
        default:
          HinhThucReportDisplay = item.HinhThucReport
          break
      }

      const NoiDungBaoCaoDisplay = item.NoiDungBaoCao
        ? `<div>${item.NoiDungBaoCao}</div>`
        : 'Không cung cấp lý do cụ thể'

      // console.log(item.HinhAnh.replace(/\\/g, '/'))
      const HinhAnhDisplay = item.HinhAnh ? item.HinhAnh.replace(/\\/g, '/') : null

      const fileType = getFileType(HinhAnhDisplay);

      let mediaTag;
      if (fileType === 'image') {
        mediaTag = `<img src="${HinhAnhDisplay}" alt="Image" class="object-cover"/>`;
      } else if (fileType === 'video') {
        mediaTag = 
        `
        <video controls>
          <source src="${HinhAnhDisplay}" type="video/mp4" class="object-cover" />
          Your browser does not support the video tag.
        </video>`;
      } else {
        // Handle the case when fileType is unknown or not determined
        mediaTag = 'File type not supported';
      }
      // console.log(HinhAnhDisplay)
      // console.log(item);

      return {
        ...item,
        HinhThucReportDisplay,
        NoiDungBaoCaoDisplay,
        HinhAnhDisplay: mediaTag,
      }
    })
    // console.log(positionInfo)
    res.render('people/home', {
      list: list,
      empty: list.length === 0,
      coordinatesList: JSON.stringify(coordinatesList),
      positionInfo: JSON.stringify(positionInfoNew),
      combinedData: dataForTemplate,
    })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
