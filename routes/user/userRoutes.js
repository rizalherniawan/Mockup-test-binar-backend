const user = require('express')()
const User = require('../../controller/user')

user.post('/signup', User.createUser)
user.post('/login', User.login )

module.exports = user