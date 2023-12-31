const mongoose = require("mongoose");
const collectionName = "perangkat";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        NAMA: {
            type: String
        },
        MAC_ADDRESS: {
            type: String
        },
        JENIS: {
            type: String
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