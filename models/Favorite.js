const mongoose = require('mongoose');

const favObj = mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MusicUser'
    },
    title : {
        type : String
    },
    format :{
        type:String,
        default:'.mp3'
    },
    musicid:{
        type : String
    }
});

module.exports = mongoose.model('Favorite',favObj);