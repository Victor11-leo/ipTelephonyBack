const express = require("express")
const router = express.Router()
const {getAdmins,getAdmin,createAdmin,deleteAdmin,updateAdmin} = require('../../controllers/adminController')

router.route('/').get(getAdmins)
// The two posts are conflicting so temporarily abadon the getAdmin
// router.route('/').post(getAdmin)
router.route('/').post(createAdmin)
router.route('/').put(updateAdmin)
router.route('/').delete(deleteAdmin)

module.exports = router