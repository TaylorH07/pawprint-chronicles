const router = require('express').Router();

const userRoute = require('./user-routes.js');
const postRoute = require('./post-routes.js');
const commentRoute = require('./comment-routes.js');

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comments', commentRoute);

module.exports = router;