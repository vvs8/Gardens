var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.json());
const Estimate = require('../models/Estimate');


router.post('/send', function(req, res, next) {
    Estimate.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;