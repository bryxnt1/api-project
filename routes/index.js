import { Router } from 'express'
import corgiRoutes from "./corgi.js"
import huskyRoutes from "./husky.js"
import shibaRoutes from "./shiba.js"
import pugRoutes from "./pug.js"

const router = Router()

router.get("/", (req, res) => {
    res.send("Welcome to the api root!")
})

router.use("/corgi", corgiRoutes)
router.use("/husky", huskyRoutes)
router.use("/shiba", shibaRoutes)
router.use("/pug", pugRoutes)

export default router;