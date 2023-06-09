const express = require("express")
const router = express.Router()
const {getCampuses,getCampus,createCampus} = require('../../controllers/campusController')

router.route('/').get(getCampuses)
router.route('/').get(getCampus)
router.route('/').post(createCampus)

module.exports = router