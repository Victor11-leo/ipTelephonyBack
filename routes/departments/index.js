const express = require("express")
const router = express.Router()
const {createDepartment,getDepartments,getDepartment} = require('../../controllers/departmentController')

router.route('/').get(getDepartments)
router.route('/').get(getDepartment)
router.route('/').post(createDepartment)


module.exports = router