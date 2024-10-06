import multer from "multer";

const multer_error_handle = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(500).json({ message: err.message });
    } else if (err) {
        return res.status(500).json({ message: "An unknown error occurred", error: err });
    }
}
export default multer_error_handle;