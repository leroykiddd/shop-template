const router = new require('express')()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/RoleMiddleware')

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router