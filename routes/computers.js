const {Router} = require("express");
const { getComputers,
        createComputer, 
        getComputerByID, 
        updateComputer, 
        deleteComputer} = require("../controllers/computers");
const router = Router();


router.get("/",getComputers);
router.post("/",createComputer);
router.get("/:id",getComputerByID);
router.put("/:id",updateComputer);
router.delete("/:id",deleteComputer);


module.exports = router;