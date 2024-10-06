import {Router} from "express";
const router_delete = Router();

import { deleteMessage } from "../controllers/contact_controller.js";
import { deleteAbout } from "../controllers/about_controller.js";

router_delete.delete("/inbox/:id", deleteMessage);
router_delete.delete("/about/:id", deleteAbout);

export default router_delete;