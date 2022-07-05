const { verifToken } = require('../handler/tokenHandler')
const { user } = require('../models')


module.exports = async(req,res,next) => {
    try {
        const { token } = req.cookies
        if(!token) return res.status(400).json({message: "Token not found"})
        const decoded = await verifToken(token)
        if(!decoded) return res.status(400).json({message: "Unauthorized"})
        const findUser = await user.findOne({where:{email: decoded.email, id: decoded.id}})
        if(!findUser) return res.status(400).json({message: "Unauthorized"})
        req.data = decoded
        next()
    } catch (error) {
        res.status(400).json({message: "network error"})
    }
} 