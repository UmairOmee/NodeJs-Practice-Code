var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserInfo',{ useNewUrlParser: true });

module.exports = { mongoose }