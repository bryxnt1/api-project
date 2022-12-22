import {Router} from 'express';
import * as controllers from "../controllers/pugs.js"

const router = Router()

router.get("/", controllers.getPugs)
router.get("/:id", controllers.getPug)
router.post("/", controllers.createPug)
router.put("/:id", controllers.updatePug)
router.delete("/:id", controllers.deletePug)

export default router;