const router = require('express').Router();
const { User, Post, Comment, Vote } = require('../../models');

// User CRUD operations
// GET all Users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET by User id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_url', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes:['title']
                }
            },
            {
                model: Post,
                attributes: ['title'],
                through: Vote,
                as: 'voted_posts'
            }
        ]
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No pup parents with this ID'})
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST - create route
router.post('/', (req, res) => {

})

// POST - login route
router.post('/login', (req, res) => {

})

// POST - logout route
router.post('/logout', (req, res) => {

})

// PUT - update by User id 
router.put('/:id', (req, res) => {

})

// DELETE - delete by User id
router.delete('/:id', (req, res) => {
    
})

module.exports = router;