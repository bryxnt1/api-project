import {Router} from 'express';
import * as controllers from "../controllers/huskys.js"

const router = Router()

router.get("/", controllers.getHuskies)
router.get("/:id", controllers.getHusky)
router.post("/", controllers.createHusky)
router.put("/:id", controllers.updateHusky)
router.delete("/:id", controllers.deleteHusky)

export default router;