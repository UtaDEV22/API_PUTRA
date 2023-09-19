require("dotenv").config();
const service = require("../services/services_perangkat");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const fileService = require("../services/file_service");
const joi = require("joi");
const fs = require("fs-extra")
const { v4, validate: isUuid } = require("uuid");
const Promise = require("bluebird");
const formidable = Promise.promisifyAll(require("formidable"), { multiArgs: true });
const form = formidable();

let response;

const create = async (req, res) => {
    try {
        req.body.GUID = v4();
        const data = await service.create(req.body);
        response = { ...data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
};

const getAll = async (req, res) => {
    try {
        const data = await service.getAll();
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const getById = async (req, res) => {
    try {
        const data = await service.getById({ KODE_PENGGUNA: req.params.id });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

// const getByInstansi = async (req, res) => {
//     try {
//         const data = await service.getByInstansi({ KODE_INSTANSI: req.params.id });
//         response = { ...requestResponse.success, data };
//     } catch (error) {
//         logger.error(error);
//         response = { ...requestResponse.server_error };
//     }
//     res.json(response);
// }

const updateOne = async (req, res) => {
    try {
        const data = await service.updateOne({ KODE_PENGGUNA: req.params.id }, req.body);
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const deleteOne = async (req, res) => {
    try {
        const data = await service.deleteOne({ GUID: req.params.id });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

// const getCount = async (req, res) => {
//     try {
//       const data = await service.getCount({ KODE_INSTANSI: req.params.id }, req.query );
//       response = { ...requestResponse.success, data };
//     } catch (error) {
//       logger.error(error);
//       response = { ...requestResponse.server_error };
//     }
//     res.json(response);
// }

module.exports = {
    create,
    getAll,
    getById,
    // getByInstansi,
    updateOne,
    deleteOne
    // getCount
}