const {Router} = require("express");
const { getComputers,
        createComputer, 
        getComputerByID, 
        updateComputer, 
        deleteComputer} = require("../controllers/computers");
const { isComputerExists } = require("../helpers/isComputerExists");
const router = Router();


router.get("/",getComputers);
router.post("/",isComputerExists,createComputer);
router.get("/:id",getComputerByID);
router.put("/:id",isComputerExists,updateComputer);
router.delete("/:id",deleteComputer);


module.exports = router;