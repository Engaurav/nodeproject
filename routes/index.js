const express = require('express');             
const router = express.Router();                                    // for routes
const homeController = require('../controllers/home_controller');  // for connecting home controllers 






//calling home controller for homepage
router.get('/', homeController.home);








module.exports = router;            //exporting router