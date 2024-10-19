import multer from "multer";

// Set file storage with multer
const diskcategory = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/categories')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const uploadCategory = multer({ storage: diskcategory });

export default uploadCategory;