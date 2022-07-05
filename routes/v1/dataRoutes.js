const Data = require('../../controller/data')
const authentication = require('../../middleware/authentication')
const data = require('express')()


data.use(authentication)
data.post('/products', Data.createData)
data.get('/products', Data.getData)
data.get('/products/:id', Data.getDataById)
data.put('/products/:id', Data.updateData)
data.delete('/products/:id', Data.deleteDataById)

module.exports = data