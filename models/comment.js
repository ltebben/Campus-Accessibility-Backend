var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    title: String,
    description: String,
    user: Number, //Member ID?
    longitude: Number,
    latitude: Number
});

module.exports = mongoose.model('Comment', commentSchema);
