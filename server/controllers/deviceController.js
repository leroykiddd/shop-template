const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", 'static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            console.log('start');
            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        const { brandId, typeId } = req.query
        let devices;
    
        if (!brandId && !typeId) {
            devices = await Device.findAll()
            console.log(devices);
        }
        if (brandId && !typeId) {
            devices = await Device.findAll({
                where: {
                    brandId
                }
            })
        }
        if (typeId && !brandId) {
            devices = await Device.findAll({
                where: {
                    typeId
                }
            })
        }
    
        return res.json(devices)
    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()