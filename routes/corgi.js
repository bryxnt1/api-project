import {Router} from 'express';
import * as controllers from "../controllers/corgis.js"

const router = Router()

router.get("/", controllers.getCorgies)
router.get("/:id", controllers.getCorgi)
router.post("/", controllers.createCorgi)
router.put("/:id", controllers.updateCorgi)
router.delete("/:id", controllers.deleteCorgi)

export default router;