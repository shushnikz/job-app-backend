const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },

    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },

}, { timestamps: true })

const adminModel = new mongoose.model('admin', adminSchema)
module.exports = adminModel