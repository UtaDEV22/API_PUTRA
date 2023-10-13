const mongoose = require("mongoose");
const collectionName = "instansi";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        KODE_INSTANSI: {
            type: String
        },
        INSTANSI: {
            type: String
        },
        ADMINISTRATOR: {
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
        JENIS_INSTANSI: {
            type: String
        },
        STATUS: {
            type: Number
        },
        ICON: {
            type: String
        },
        LAYANAN: {
            type: Object,
            default: {},
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