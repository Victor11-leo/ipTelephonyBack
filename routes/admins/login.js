const express = require("express")
const router = express.Router()
const {adminLogin} = require('../../controllers/adminController')

router.route('/').get(adminLogin)

module.exports = router