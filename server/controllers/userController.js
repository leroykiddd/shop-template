const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models') 

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const have = await User.findOne({
            where: { 
                email
             }
        })

        if(have) {
            return next(ApiError.badRequest('Пользователь уже зарегестрирован!'))
        }

        // Хеширование пароля
        const hashPassword = await bcrypt.hash(password, 3)
        
        // Создание пользователя и корзины для него
        const user = await User.create({
            email,
            role,
            password: hashPassword
        })
        const basket = Basket.create({
            userId: user.id
        })

        // Создание токена
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res) {
        
    }

    async isAuth(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не указан id пользователя!'))
        }
        res.json(id)
    }

    async getAllUsers(req, res, next) {
        const users = await User.findAll()

        return res.json(users)
    }
}

module.exports = new UserController()