const router = require('express').Router();

// GET all comments
router.get('/', (req, res) => {

})

// POST - create comment
router.post('/', withAuth, (req, res) => {

})

//DELETE  - delete comment
router.delete('/:id', withAuth, (req, res) => {
    
})


module.exports = router;