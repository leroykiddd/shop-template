const router = new require('express')()
const typeController = require('../controllers/typeController')

router.post('/', typeController.create)
router.get('/', typeController.getAll)

module.exports = router