import express from "express";
import soService from "../../services/so.service.js";

import licenseService from "../../services/LicensingRequest.service.js";
import posPendingService from "../../services/posPending.service.js";
import positionService from "../../services/position.service.js";
import phuongService from "../../services/phuong.service.js";
import quanService from "../../services/quan.service.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// dashboard/Map
router.get('/so', async function (req, res) {
    try {
        const list = await positionService.findAll();
        const coordinatesList = list.map(item => [item.Lng, item.Lat]); // Lấy tọa độ từ danh sách dữ liệu

        // Lấy thông tin chi tiết của từng vị trí trong danh sách
        const positionInfoPromises = list.map(item => positionService.findById(item.Id));
        const positionInfo = await Promise.all(positionInfoPromises);

        res.render('so/soMap', {
            layout: 'soPage',
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

router.get('/so/quan', async function (req, res) {
    try {
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await soService.countAllQuan();
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await soService.findFromIdQuan(limit, offset);
        res.render('so/list/quanList', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/quan/:quan', async function (req, res) {
    try {
        const id = req.params.quan;
        console.log(id);
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await soService.countAllPhuong(id);
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await soService.findFromIdPhuong(id, limit, offset);
        res.render('so/list/phuongList', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/quangcao', async function (req, res) {
    try {
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await soService.countAdsType();
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await soService.findAdsType(limit, offset);
        res.render('so/loaiQuangCao/list', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/quangcao/:type', async function (req, res) {
    try {
        const type = req.params.type;

        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await soService.countFromAdsType(type);
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await soService.findFromAdsType(type, limit, offset);
        res.render('so/loaiQuangCao/detail', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/bangqc', async function (req, res) {
    try {
        const quyhoach = 1;
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await positionService.countBangQC(quyhoach);
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await positionService.findBangQC(limit, offset);

        if (list && list.length > 0) {
            for (let item of list) {
                const phuong = await phuongService.findById(item.Phuong);
                const quan = await quanService.findById(item.KhuVuc);
                item.Phuong = phuong.Name;
                item.KhuVuc = quan.Name;
            }
        }

        res.render('so/bangqc/list', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/diemdat', async function (req, res) {
    try {
        const quyhoach = 0;
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await positionService.countDiemDat(quyhoach);
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await positionService.findDiemDat(limit, offset);

        if (list && list.length > 0) {
            for (let item of list) {
                const phuong = await phuongService.findById(item.Phuong);
                const quan = await quanService.findById(item.KhuVuc);
                item.Phuong = phuong.Name;
                item.KhuVuc = quan.Name;
            }
        }

        res.render('so/list/diemdatList', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/yeu-cau-chinh-sua', async function (req, res) {
    try {
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await posPendingService.countAll();
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }
        const list = await posPendingService.findAll(limit, offset);

        if (list && list.length > 0) {
            for (let item of list) {
                const phuong = await phuongService.findById(item.Phuong);
                const quan = await quanService.findById(item.KhuVuc);
                item.Phuong = phuong.Name;
                item.KhuVuc = quan.Name;
            }
        }

        res.render('so/list/yeuCauChinhSuaList', {
            list: list,
            empty: list.length === 0,
            pageNumbers: pageNumbers,
            layout: 'soPage',
        });
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/so/capphep', async function (req, res) {
    try {
        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await licenseService.countAll();
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await licenseService.findFromId(limit, offset);

        if (list && list.length > 0) {
            for (let item of list) {
                const phuong = await phuongService.findById(item.Phuong);
                const quan = await quanService.findById(item.KhuVuc);
                item.Phuong = phuong.Name;
                item.KhuVuc = quan.Name;
            }

            // Lọc danh sách để chỉ hiển thị những phần tử có Duyet = 0
            const filteredList = list.filter(item => item.Duyet === "0");

            res.render('so/list/capPhepList', {
                list: filteredList,
                empty: filteredList.length === 0,
                pageNumbers: pageNumbers,
                layout: 'soPage',
            });
        } else {
            res.render('so/list/capPhepList', {
                list: [],
                empty: true,
                pageNumbers: pageNumbers,
                layout: 'soPage',
            });
        }
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/so/capphep/:id', async function (req, res) {
    try {
        const id = req.params.id;
        console.log(id);
        const duyet = req.body.duyet;
        console.log(duyet)

        const templist = await licenseService.updateDuyetById(id, duyet);

        const limit = 10;
        const page = req.query.page || 1;
        const offset = (page - 1) * limit;

        const total = await licenseService.countAll();
        const nPages = Math.ceil(total / limit);
        const pageNumbers = [];
        for (let i = 1; i <= nPages; i++) {
            pageNumbers.push({
                value: i,
                isActive: i === +page
            });
        }

        const list = await licenseService.findFromId(limit, offset);

        if (list && list.length > 0) {
            for (let item of list) {
                const phuong = await phuongService.findById(item.Phuong);
                const quan = await quanService.findById(item.KhuVuc);
                item.Phuong = phuong.Name;
                item.KhuVuc = quan.Name;
            }

            // Lọc danh sách để chỉ hiển thị những phần tử có Duyet = 0
            const filteredList = list.filter(item => item.Duyet === "0");

            res.render('so/list/capPhepList', {
                list: filteredList,
                empty: filteredList.length === 0,
                pageNumbers: pageNumbers,
                layout: 'soPage',
            });
        } else {
            res.render('so/list/capPhepList', {
                list: [],
                empty: true,
                pageNumbers: pageNumbers,
                layout: 'soPage',
            });
        }
    } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
