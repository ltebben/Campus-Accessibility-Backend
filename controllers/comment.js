/**
 *  Controller for comments
 */
var Comment = require('../models/comment');
var util = require('util');

exports.getAll = function(req, res) {
    //code goes here
    Comment.find(function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
};

exports.renderAll = function(req, res) {
    //code goes here
    Comment.find(function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.render('comment', {
            title: "comments",
            comments: comments,
        });
    });
};

exports.post = function(req, res) {
    var comment = Comment();
    requirements = ['longitude', 'latitude', 'title', 'description'];

    for (var i = 0; i < requirements.length; i++) {
        req.checkBody(requirements[i], 'Missing body').notEmpty();
    }
    var errors = req.validationErrors();
    if (errors) {
        res.send('There has been validation errors: ' + util.inspect(errors), 400);
        console.log('There has been validation errors: ' + util.inspect(errors));
    }


    comment.longitude = req.body.longitude;
    comment.latitude = req.body.latitude;
    comment.title = req.body.title;
    comment.description = req.body.description;
    
    comment.save(function(err) {
        if (err) {
            res.send(err);
        }
    });
    res.send(201);
}