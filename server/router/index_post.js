import { Router } from "express";
const router_post = Router();

// verify token
import verifyToken from "../middlewares/verify_middleware.js";
import multer_error_handle from "../middlewares/multer_err_middleware.js";
// controllers
import { register, login } from "../controllers/auth_controller.js";
import {submitForm} from "../controllers/contact_controller.js";
import {addCategory} from "../controllers/category_controller.js";
import {addAbout} from "../controllers/about_controller.js";
import {addProduct} from "../controllers/product_controller.js"
// multer upload file settings 
import uploadCategory from "../settings/disk_category.js";
import uploadAbout from "../settings/disk_about.js";
import uploadProduct from "../settings/disk_product.js";
// auth
router_post.post("/admin/register", register);
router_post.post("/admin/login", login);
// contact form
router_post.post("/contact", submitForm);
// category 
router_post.post("/add/category", uploadCategory.single("categoryImage"), addCategory);
// products
router_post.post("/add/product", uploadProduct.single("productImage"), addProduct);
// about
router_post.post("/add/about", uploadAbout.single("aboutImage"), addAbout);
// Multer Error Handling Middleware
router_post.use(multer_error_handle);

export default router_post;