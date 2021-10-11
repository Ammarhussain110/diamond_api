const Product = require('../../model/product')


const index = (req, res) => {
    res.json({ 'status': 'success', 'data': 'data' })
}

const store = (req, res) => {
    res.json({ 'status': 'success', 'data': 'product' })
}
const multer = require('multer');

module.exports = {
    index, store
}