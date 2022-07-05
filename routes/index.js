const api = require('express')()
const user = require('./user/userRoutes')
const data = require('./v1/dataRoutes')

api.use('/auth', user)
api.use('/v1', data)

module.exports = api