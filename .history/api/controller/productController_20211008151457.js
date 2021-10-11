const Product = require('../../model/product')


const index = (req, res) => {
    res.json({ 'status': 'success', 'data': 'data' })
}

const create = (req, res) => {
    res.json({ 'status': 'success', 'data': 'product' })
}