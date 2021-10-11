const Product = require('../../model/product')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});
const index = (req, res) => {
    res.json({ 'status': 'success', 'data': 'data' })
}
const uploadSingle = () => upload.single('productImage')
const store = (req, res) => {
    res.json({ 'status': 'success', 'data': 'product' })
}

module.exports = {
    index, store, uploadSingle
}