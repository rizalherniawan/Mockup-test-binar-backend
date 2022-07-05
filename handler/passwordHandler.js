const bcrypt = require('bcrypt')
require('dotenv').config()

const hashPassword = (password) => {
    return bcrypt.hashSync(password, parseInt(process.env.SALT))
}

const comparePassword = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}


module.exports = {hashPassword, comparePassword}