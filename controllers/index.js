const router = require('express').Router();

const apiRoute = require("./api");
const homeRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');


router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoute);


module.exports = router;