const router = new require('express')()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/RoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router