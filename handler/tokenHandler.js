const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = async(payload) => {
    const token = await jwt.sign(payload, process.env.SECRET_KEY)
    return token
}

const verifToken = async(token) => {
    return jwt.verify(token, process.env.SECRET_KEY, function(err,decoded) {
        if(err) return null
        return decoded
    })
}

module.exports = {generateToken, verifToken}