var express = require('express');
var router = express.Router();
var commentController = require('./../controllers/comment');

router.get('/', commentController.getAll);

module.exports = router;