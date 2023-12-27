/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50739 (5.7.39)
 Source Host           : localhost:3306
 Source Schema         : qlqc

 Target Server Type    : MySQL
 Target Server Version : 50739 (5.7.39)
 File Encoding         : 65001

 Date: 27/12/2023 23:43:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Hashed_password` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Date_of_birth` date DEFAULT NULL,
  `Phone` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Role` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `OTP` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  KEY `ID` (`ID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
INSERT INTO `accounts` (`ID`, `Name`, `Email`, `Hashed_password`, `Date_of_birth`, `Phone`, `Role`, `OTP`) VALUES (1, 'Vũ Đình Chương', 'vdchuong21@clc.fitus.edu.vn', '$2a$10$0LQHd6fTQfAjAz5OYtRc/uz5eVm5FvjibnYgXfCFWlwe4aW9FATZi', '2023-11-06', '0356021522', 'cbsovhtt', '');
INSERT INTO `accounts` (`ID`, `Name`, `Email`, `Hashed_password`, `Date_of_birth`, `Phone`, `Role`, `OTP`) VALUES (2, 'Nguyễn Quốc Huy', 'nqhuy21@clc.fitus.edu.vn', '$2a$10$s7t/oaak6rOwKTEyp0OO8.hNziyrHxLaD9F.adk1pr4DB4hq//Hcm', '2023-11-20', '0356021523', 'cbsovhtt', '');
INSERT INTO `accounts` (`ID`, `Name`, `Email`, `Hashed_password`, `Date_of_birth`, `Phone`, `Role`, `OTP`) VALUES (3, 'Lê Hoàng Sang', 'lhsang64.contact@gmail.com', '$2a$10$zM37frDb1MLCwZffv7yDeey/ojMUqJv4VejFvB/dfs3C82d0c2Mue', '2023-11-20', '1234', 'cbsovhtt', '391069');
INSERT INTO `accounts` (`ID`, `Name`, `Email`, `Hashed_password`, `Date_of_birth`, `Phone`, `Role`, `OTP`) VALUES (8922, 'Lê Hoàng Sang', 'lhsang21@clc.fitus.edu.vn', '$2a$10$IfRa8aWkwf8KU.68PKDGUuZHwDJfkkgRIzf1Rz4rr6PbTGxDCPbfW', '2023-11-07', '0356021521', 'cbsovhtt', NULL);
COMMIT;

-- ----------------------------
-- Table structure for ads
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
  `Id` int(11) NOT NULL,
  `Lat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Lng` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `LoaiBangQC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phuong` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `KhuVuc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `LoaiViTri` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhThucQC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhAnh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `QuyHoach` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `KichThuoc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of ads
-- ----------------------------
BEGIN;
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (74, '10.77175184', '106.697893', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (44, '10.77580376', '106.6989327', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (45, '10.77520415', '106.6993958', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (46, '10.77469972', '106.6994728', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (47, '10.77462826', '106.6993316', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (48, '10.775263', '106.6999863', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (49, '10.7766712', '106.6998965', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (50, '10.77766893', '106.6988714', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (51, '10.77742933', '106.6984777', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (52, '10.77704185', '106.6995538', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (53, '10.77627693', '106.6995452', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (54, '10.77566345', '106.7003421', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (55, '10.77628444', '106.7000852', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (56, '10.77505475', '106.700633', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (57, '10.77447045', '106.7008555', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (58, '10.77412575', '106.7011678', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (59, '10.77419721', '106.7007399', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (60, '10.77351582', '106.7001148', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (61, '10.77334767', '106.6999564', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (62, '10.77332245', '106.6997657', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (63, '10.77367556', '106.6993635', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (64, '10.77388154', '106.6991367', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (65, '10.77320055', '106.6990468', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (66, '10.77341073', '106.698191', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (67, '10.77287267', '106.6984991', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (68, '10.77235142', '106.6988371', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (69, '10.7732488', '106.6976608', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (70, '10.773707', '106.6976737', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (71, '10.77419882', '106.6982257', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (72, '10.77449', '106.6976701', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (73, '10.77279992', '106.6969823', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (35, '10.77554244', '106.6921255', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (36, '10.77695772', '106.6905327', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (37, '10.77681059', '106.690875', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (38, '10.77644151', '106.691118', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (39, '10.77688136', '106.6916169', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (40, '10.77659755', '106.6938443', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (41, '10.77689532', '106.6979948', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (42, '10.77665572', '106.6979948', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (43, '10.77592146', '106.699044', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (34, '10.77426069', '106.6938336', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (33, '10.77483459', '106.6929379', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (32, '10.77473791', '106.6932631', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (3, '10.77679747', '106.6923231', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (1, '10.77598746', '106.6918267', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (2, '10.77740278', '106.6931361', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (18, '10.77369471', '106.6973827', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (17, '10.77406235', '106.6989367', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (16, '10.77491309', '106.6981379', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (15, '10.77450892', '106.6961143', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (14, '10.77352056', '106.694476', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (13, '10.77286084', '106.6935314', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (12, '10.77225972', '106.694467', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (11, '10.77225972', '106.6944755', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (9, '10.77144052', '106.6929512', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (10, '10.77288783', '106.6954669', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (8, '10.77152459', '106.6933876', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (7, '10.7722224', '106.6922751', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (4, '10.7761442', '106.6945446', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (5, '10.77489994', '106.6960851', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (6, '10.77371452', '106.6944933', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (31, '10.77433448', '106.6902683', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (30, '10.77410749', '106.6897548', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (29, '10.77362827', '106.6896093', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (28, '10.77378801', '106.6894082', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (27, '10.77491997', '106.6905581', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (26, '10.7764', '106.6921797', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (25, '10.77564444', '106.6951038', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (24, '10.77416073', '106.6953736', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (23, '10.77356243', '106.6966417', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (22, '10.77319447', '106.6958979', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (21, '10.77348452', '106.6962873', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (20, '10.77400998', '106.6970233', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (19, '10.7739217', '106.6971131', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (75, '10.77152064', '106.6984107', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (76, '10.77122638', '106.6981369', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (77, '10.77141134', '106.6986119', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (78, '10.77200826', '106.6985477', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (79, '10.77171991', '106.6988681', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (80, '10.77208143', '106.6989451', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (81, '10.77308052', '106.6999732', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (82, '10.77245838', '106.6994083', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (83, '10.77268538', '106.6993356', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (84, '10.77313517', '106.6997549', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (85, '10.77320715', '106.700269', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (86, '10.77261024', '106.7003631', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (87, '10.77237904', '106.7006241', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (88, '10.77190403', '106.7008338', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (89, '10.77171481', '106.7007653', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (90, '10.77165175', '106.700423', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (91, '10.77184512', '106.7004615', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (92, '10.77167277', '106.6996528', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (93, '10.7712482', '106.6991435', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (94, '10.77105904', '106.699058', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (95, '10.77211835', '106.6975389', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (96, '10.77259336', '106.6972522', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (97, '10.77336029', '106.6974325', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (98, '10.77356627', '106.6966708', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (99, '10.77469704', '106.6962728', 'Trung tâm thương mại', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (100, '10.77518045', '106.6963755', 'Trụ bảng hiflex', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (101, '10.77633241', '106.6974658', 'Trụ màn hình điển tử LED', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (102, '10.77568926', '106.6968882', 'Trụ hộp đèn', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (103, '10.7755043', '106.6975043', 'Bảng hiflex ốp tường', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (104, '10.77620209', '106.6977868', 'Trụ/Cụm pano', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '1', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (105, '10.77748839', '106.6973503', 'Cổng chào', '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Đất công', 'Cổ động chính trị', NULL, '0', NULL, 1);
INSERT INTO `ads` (`Id`, `Lat`, `Lng`, `LoaiBangQC`, `DiaChi`, `Phuong`, `KhuVuc`, `LoaiViTri`, `HinhThucQC`, `HinhAnh`, `QuyHoach`, `KichThuoc`, `SoLuong`) VALUES (0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for capphep
-- ----------------------------
DROP TABLE IF EXISTS `capphep`;
CREATE TABLE `capphep` (
  `ID` int(11) NOT NULL,
  `PosID` int(11) DEFAULT NULL,
  `DiaChi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phuong` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `KhuVuc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhThucQC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NoiDungQC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhAnh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `Duyet` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of capphep
-- ----------------------------
BEGIN;
INSERT INTO `capphep` (`ID`, `PosID`, `DiaChi`, `Phuong`, `KhuVuc`, `HinhThucQC`, `NoiDungQC`, `HinhAnh`, `Email`, `NgayBatDau`, `NgayKetThuc`, `Duyet`) VALUES (1, 1, '227 Nguyễn Văn Cừ', NULL, 'Quận 5', 'Cổ động chính trị', 'Chua', '1', 'vdc@gmail.com', '2024-01-03', '2024-02-09', '1');
INSERT INTO `capphep` (`ID`, `PosID`, `DiaChi`, `Phuong`, `KhuVuc`, `HinhThucQC`, `NoiDungQC`, `HinhAnh`, `Email`, `NgayBatDau`, `NgayKetThuc`, `Duyet`) VALUES (2, 4, '227 Nguyễn Văn Cừ', 'Phường 14', 'Quận 5', '2', NULL, '', 'vdchuong@gmail.com', NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for phancong
-- ----------------------------
DROP TABLE IF EXISTS `phancong`;
CREATE TABLE `phancong` (
  `ID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `Phuong` varchar(255) NOT NULL,
  `Quan` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of phancong
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for phuong
-- ----------------------------
DROP TABLE IF EXISTS `phuong`;
CREATE TABLE `phuong` (
  `ID` int(11) DEFAULT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ThuocQuan` int(11) DEFAULT NULL,
  KEY `PhuongThuocQuan` (`ThuocQuan`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of phuong
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for quan
-- ----------------------------
DROP TABLE IF EXISTS `quan`;
CREATE TABLE `quan` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of quan
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `STT` int(11) NOT NULL AUTO_INCREMENT,
  `AdsID` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhThucReport` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `SDT` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NoiDungBaoCao` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhAnh` binary(1) DEFAULT NULL,
  `Xuly` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ThoiGian` datetime DEFAULT NULL,
  `Lat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Lng` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`STT`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of report
-- ----------------------------
BEGIN;
INSERT INTO `report` (`STT`, `AdsID`, `HinhThucReport`, `HoTen`, `Email`, `SDT`, `NoiDungBaoCao`, `HinhAnh`, `Xuly`, `ThoiGian`, `Lat`, `Lng`) VALUES (1, '85', 'Cổ động chính trị', 'Tao', 'Meo@gmail.com', '123123', '<p>khong biet</p>', 0x53, '0', '2023-12-11 00:22:39', '10.77320715', '106.700269');
INSERT INTO `report` (`STT`, `AdsID`, `HinhThucReport`, `HoTen`, `Email`, `SDT`, `NoiDungBaoCao`, `HinhAnh`, `Xuly`, `ThoiGian`, `Lat`, `Lng`) VALUES (2, '59', 'Cổ động chính trị', 'Tôi', 'My@gmai.com', '12366', '<p>C&oacute; g&igrave;</p>', 0x00, '1', '2023-12-11 00:24:17', '10.77419721', '106.7007399');
COMMIT;

-- ----------------------------
-- Table structure for updatepos
-- ----------------------------
DROP TABLE IF EXISTS `updatepos`;
CREATE TABLE `updatepos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PosID` int(11) DEFAULT NULL,
  `HinhThucQC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phuong` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `KhuVuc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NoiDungChinhSua` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HinhAnh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ThoiGian` date DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of updatepos
-- ----------------------------
BEGIN;
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (1, 0, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-29');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (9, 0, '', '', '', '', '', '', '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (10, 0, '', '', '', '', '', '', '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (11, 5, 'Cổ động chính trị', '227 Nguyễn Văn Cừ', '', 'Quận 5', '', '', '2023-12-09');
INSERT INTO `updatepos` (`ID`, `PosID`, `HinhThucQC`, `DiaChi`, `Phuong`, `KhuVuc`, `NoiDungChinhSua`, `HinhAnh`, `ThoiGian`) VALUES (12, 0, '2', '227 Nguyễn Văn Cừ', 'Phường 14', 'Quận 5', '', '', '2023-12-10');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
