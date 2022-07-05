const { data } = require('../models')
const errorHandler = require('../handler/errorHandler')


class Data {
    static async createData(req,res) {
        try {
            const payload = {
                name: req.body.name,
                price: req.body.price,
                imageurl: req.body.imageurl
            }
            const productdata = await data.create(payload)
            return res.status(200).json({status: 'OK', results: productdata})
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: 'Network error'})
        }
    }
    static async getData(req,res) {
        try {
            const allData = await data.findAll()
            return res.status(200).json({status: 'OK', results: allData})
        } catch (error) {
            res.status(500).json({message: 'Network error'})
        }
    }
    static async getDataById(req,res) {
        try {
            const dataId = await data.findByPk(req.params.id)
            if(!dataId) return res.status(400).json({message: 'data not found'})
            return res.status(200).json({status: 'OK', results: dataId})
        } catch (error) {
            res.status(500).json({message: 'Network error'})
        }
    }
    static async deleteDataById(req,res) {
        try {
            const findProduct = await data.findByPk(req.params.id)
            if(!findProduct) return res.status(400).json({message: 'Data not found'})
            await data.destroy({where:{id: req.params.id}})
            return res.status(200).json({status: 'OK', result: {'message': `${req.params.id} deleted`}})
        } catch (error) {
            res.status(500).json({message: 'Network error'})
        }
    }
    static async updateData(req,res) {
        try {
            const findProduct = await data.findByPk(req.params.id)
            if(!findProduct) return res.status(400).json({message: 'Data not found'})
            const updated = await data.update({
                name: req.body.name,
                price: req.body.price,
                imageurl: req.body.imageurl
            }, {where:{id: req.params.id}})
            const afterUpdate = await data.findByPk(req.params.id)
            res.status(200).json({status: 'OK', result: afterUpdate})
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: 'Network error'})
        }
    }
}

module.exports = Data