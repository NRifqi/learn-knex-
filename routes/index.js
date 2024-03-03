const express = require("express")
const getHi = require("../controller")
const router = express.Router()


router.get("/", getHi)


module.exports = router