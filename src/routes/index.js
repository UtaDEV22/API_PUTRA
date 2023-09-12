const express = require("express");
const router = express.Router();
const { requestResponse } = require("../utils/index");
const authController = require("../controller/controller_auth");
// const instansi = require("./instansi");
// const jabatan = require("./jabatan");
const pengguna = require("./pengguna");
const admin = require("./admin");
const suadmin = require("./suadmin");
// const jenis_laporan = require("./jenis_laporan");
// const laporan = require("./laporan");
// const pemasok = require("./pemasok");
// const pelanggan = require("./pelanggan");
// const daftar_perangkat = require("./daftar_perangkat");
const perangkat = require("./perangkat");

let response;

router.get(
  "/",
  (req, res) => {
    response = requestResponse.success;
    response.message = "PKL - API!";
    res.status(response.code).json(response);
  }
);

router.post(
  "/suadmin/login",
  authController.login
);

// router.post(
//   "/admin/login",
//   authController.loginPengguna
// );

// router.use("/instansi", instansi);
// router.use("/jabatan", jabatan);
router.use("/pengguna", pengguna);
router.use("/perangkat", perangkat);
router.use("/suadmin", suadmin);
router.use("/admin", admin);
// router.use("/jenis_laporan", jenis_laporan);
// router.use("/laporan", laporan);
// router.use("/pelanggan", pelanggan);
// router.use("/perangkat", perangkat);
// router.use("/daftar_perangkat", daftar_perangkat);

module.exports = router;
