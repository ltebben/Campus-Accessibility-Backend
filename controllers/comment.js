/**
 *  Controller for comments
 */
var Comment = require('../models/comment');

exports.getAll = function(req, res) {
    //code goes here
    Comment.find(function (err, comments) {
        res.json(comments);
    });
};