var mongoose = require('mongoose');

var User = mongoose.model('User',{
    name :{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    rollno:{
        type:Number,
        default:null
    },
    isPass:{
        type:Boolean,
        default:false
    }
})

module.exports = { User }