const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all users posts
router.get('/', (req, res) => {

})

// GET post by id
router.get('/:id', (req, res) => {

})

// POST - create post
router.post('/', withAuth, (req, res) =>{

})

// PUT upvote route
router.put('/upvote', withAuth, (req, res) =>{

})

// PUT - update post by id
router.put('/:id', withAuth, (req, res) => {

})

//DELETE - delete post by id
router.delete('/:id', withAuth, (req, res) => {
    
})

module.exports = router;