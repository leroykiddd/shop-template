const router = new require('express')()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/RoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router