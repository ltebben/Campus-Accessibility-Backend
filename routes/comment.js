var express = require('express');
var router = express.Router();
var commentController = require('./../controllers/comment');

router.get('/', commentController.getAll);
router.get('/render', commentController.renderAll);
router.post('/', commentController.post);

module.exports = router;