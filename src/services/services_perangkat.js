const bcrypt = require("bcrypt");
const model = require("../model/model_perangkat");
const { requestResponse } = require("../utils");

let response;

const create = async (data) => {
    await model.create(data);
    console.log(data)
    return { ...requestResponse.success, data: model };
};

const getAll = async (condition) => {
    return model.find(condition, { _id: false }, { lean: true });
};

const getById = async (condition) => {
    return model.findOne(condition, { _id: false }, { lean: true });
};

// const getByInstansi = async (condition) => {
//     return model.find(condition, { _id: false }, { lean: true }).sort({ CREATED_AT: -1 });
// };

const updateOne = async (condition, body) => {
    await model.updateOne(condition, body);
    const data = await model.findOne({KODE_PENGGUNA: condition.KODE_PENGGUNA}, { _id: false }, { lean: true });
    const result = { ...requestResponse.success, data: {
        data: { ...data }
    }};
    return result;
}

// const find = async (condition) => {
//     return model.findOne(condition, { _id: false }, { lean: true });
// };

const deleteOne = async (condition ) => {
    return model.deleteOne(condition)
};

// const getCount = async (condition) => {
//     return model.find(condition, { _id: false }, { lean: true }).count();
// };

module.exports = {
    create,
    getAll,
    getById,
    // getByInstansi,
    updateOne,
    deleteOne
    // find,
    // getCount
};
