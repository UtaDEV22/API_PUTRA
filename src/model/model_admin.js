const mongoose = require("mongoose");
const collectionName = "admin";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        KODE_INSTANSI: {
            type: String
        },
        NAMA: {
            type: String
        },
        TELEPON: {
            type: String
        },
        ALAMAT: {
            type: String
        },
        PASSWORD: {
            type: String
        },
        ROLE: {
            type: String
        },
        DOMISILI: {
            type: String
        },
        DITAMBAHKAN: {
            type: String
        },
        STATUS: {
            type: Number
        },
        CREATED_AT: {
            type: Date,
            default: () => new Date()
        },
        UPDATED_AT: {
            type: Date,
            default: () => new Date()
        }
    },
    {
        versionKey: false,
        collection: collectionName
    });

module.exports = mongoose.model(collectionName, UserSchema);