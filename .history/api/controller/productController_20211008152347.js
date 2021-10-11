const Product = require('../../model/product')

const multer = require('multer');


const index = (req, res) => {
    res.json({ 'status': 'success', 'data': 'data' })
}

const store = (req, res) => {
    res.json({ 'status': 'success', 'data': 'product' })
}

module.exports = {
    index, store
}