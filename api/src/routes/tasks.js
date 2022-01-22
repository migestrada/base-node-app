const { Router } = require('express');
// Project
const { 
  init,
  search,
  create,
  update,
  eliminate
} = require('../controllers/tasks') 
    
const router = Router();

router.get('/', init);
router.get('/search/', search);
router.get('/search/:id', search);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', eliminate);

module.exports = router;