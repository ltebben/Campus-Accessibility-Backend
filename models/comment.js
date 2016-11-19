var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: String,
    user: Number //Member ID?
});

module.exports = mongoose.mode('Comment', commentSchema);
