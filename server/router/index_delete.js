import { Router } from 'express'
const router_delete = Router()

import { deleteMessage } from '../controllers/contact_controller.js'
import { deleteAbout } from '../controllers/about_controller.js'
import { deleteProduct } from '../controllers/product_controller.js'

router_delete.delete('/admin/inbox/:id', deleteMessage)
router_delete.delete('/admin/about/:id', deleteAbout)
router_delete.delete('/admin/product/:id', deleteProduct)
export default router_delete
