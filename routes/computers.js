const {Router} = require("express");
const { getComputers } = require("../controllers/computer");
const router = Router();


router.get("/",getComputers)


module.exports = router;