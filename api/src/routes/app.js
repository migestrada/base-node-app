const { Router } = require('express');
// Project
const { init } = require('../controllers/app') 
    
const router = Router();

router.get('/', init);

module.exports = router;