const { string } = require("joi");
const mongoose = require("mongoose");
const collectionName = "pengguna";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        NAMA: {
            type: String
        },
        MAC_ADDRESS: {
            type: string
        },
        JENIS: {
            type: string
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