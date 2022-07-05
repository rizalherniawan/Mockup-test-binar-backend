const { user } = require('../models')
const { hashPassword, comparePassword } = require('../handler/passwordHandler')
const errorHandler = require('../handler/errorHandler')
const { generateToken } = require('../handler/tokenHandler')

class User {
    static async createUser(req,res) {
        try {
            const findEmail = await user.findOne({where: {email: req.body.email}})
            if(findEmail) return res.status(400).json({message: "Email already exist"})
            const password = hashPassword(req.body.password)
            const userCreated = await user.create({
                name: req.body.name,
                email: req.body.email,
                password: password
            })
            return res.status(200).json({status: "OK", result: userCreated})
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: 'Network error'})
        }
    }
    static async login(req,res) {
        try {
            const findEmail = await user.findOne({where: {email: req.body.email}})
            if(!findEmail) return res.status(400).json({message: "email not found"})
            const {password, ...payload} = findEmail.dataValues
            const verifPass = comparePassword(req.body.password, password)
            if(!verifPass) return res.status(400).json({message: "wrong password"})
            const access_token = await generateToken(payload)
            res.cookie('token', access_token, {
                maxAge: 86400 * 1000,
                httpOnly: true
            })
            return res.status(200).json({status: "OK", result:{'access_token': access_token}})
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: 'Network error'})
        }
    }
}

module.exports = User