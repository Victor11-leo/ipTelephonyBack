const express = require("express")
const router = express.Router()
const {getExtensions,createExtension,deleteExtension,updateExtension} = require('../../controllers/extensionController')

router.route('/').get(getExtensions)

router.route('/').post(createExtension)

router.route('/').put(updateExtension)

router.route('/').delete(deleteExtension)

module.exports = router