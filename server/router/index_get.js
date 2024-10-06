import { Router } from "express";
const router_get = Router();
// verify token
import verifyToken from "../middlewares/verify_middleware.js";
import profile from "../controllers/profile_controller.js";
import {getAllCategory, getSingleCategory} from "../controllers/category_controller.js";
import {getAllProduct} from "../controllers/product_controller.js"
import { getAbout } from "../controllers/about_controller.js";
import { messageBox } from "../controllers/contact_controller.js";
// user profile 
router_get.get("/admin/profile", verifyToken, profile);

// category 
router_get.get("/categories", getAllCategory);
router_get.get("/categories/:id", getSingleCategory);
// products
router_get.get("/products", getAllProduct);
// about
router_get.get("/about", getAbout);
// contact 
router_get.get("/inbox", messageBox)
export default router_get;