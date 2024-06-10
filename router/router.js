const { Router } = require("express");
const { moviePage, addMovie, addPage, editPage, deletMovie } = require("../controller/controller");
const imageUpload = require("../middleware/middleware");

const router = Router();

router.get('/',moviePage)
router.get('/addMovie',addPage)
router.post('/insartData',imageUpload,addMovie)
router.get('/editMovie:id',editPage)
router.get('/deleteMovie:id',deletMovie)

module.exports=router 