import {Router} from 'express';
import * as controllers from "../controllers/shibas.js"

const router = Router()

router.get("/", controllers.getShibas)
router.get("/:id", controllers.getShiba)
router.post("/", controllers.createShiba)
router.put("/:id", controllers.updateShiba)
router.delete("/:id", controllers.deleteShiba)

export default router;