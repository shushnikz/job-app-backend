const express = require("express")
const router = express.Router();
const Admin = require("../models/adminModel")

router.post("/signup", async (req, res) => {
    try {
        const newuser = await Admin(req.body)
        const admin = await newuser.save()
        res.send("User Created Successfully")
    } catch (error) {
        return res.status(400).json(error)
    }
})

router.post("/signin", async (req, res) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username, password: req.body.password })
        if (admin) {
            res.send(admin)
        }
        else {
            return res.status(400).json({ message: "invalid credential" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router