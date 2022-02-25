const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST - create post
router.post('/', withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, userId: req.session.userId })
    .then(newPost => {
        res.json(newPost);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// PUT upvote route
router.put('/upvote', withAuth, (req, res) => {
    Post.upvote({ ...req.body, userId: req.session.userId }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// PUT - update post by id
router.put('/:id', withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//DELETE - delete post by id
router.delete('/:id', withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;