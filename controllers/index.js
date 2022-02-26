const router = require('express').Router();

const homeRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');
const apiRoute = require("./api")

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoute);


module.exports = router;