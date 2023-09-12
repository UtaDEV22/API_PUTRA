const express = require("express");
const router = express.Router();
const controller = require("../controller/controller_perangkat");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
    "/create",
    controller.create
);

router.get(
    "/getAll",
    controller.getAll
);

router.get(
    "/getById/:id",
    controller.getById
);

// router.get(
//     "/getByInstansi/:id",
//     controller.getByInstansi
// );

router.put(
    "/update/:id",
    controller.updateOne
);

router.delete(
    "/:guid",
    controller.deleteOne
);

// router.get(
//     "/getCount/:id",
//     controller.getCount
// );

module.exports = router;
