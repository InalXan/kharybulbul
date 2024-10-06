import multer from "multer";

const diskproduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/products')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const uploadProduct = multer({ storage: diskproduct });

export default uploadProduct;