import multer from "multer";

const diskabout = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/about')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const uploadAbout = multer({ storage: diskabout });

export default uploadAbout;