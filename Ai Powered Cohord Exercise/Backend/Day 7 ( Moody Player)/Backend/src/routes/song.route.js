const router  = require("express").Router()
const multer = require('multer')

const uplod = multer({storage:multer.memoryStorage()})


router.post('/songs', uplod.single('audio'), (req, res) => {

  console.log(req.body);
  console.log(req.file);

res.json({

messege:"Songs route is working"


})  

})



module.exports = router