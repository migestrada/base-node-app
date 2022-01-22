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
router.get('/search', search);
router.post('/', create);
router.put('/:id', update);
router.delete('/delete/:id', eliminate);

module.exports = router;