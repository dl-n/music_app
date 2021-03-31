const mongoose = require('mongoose');

const userObj =new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type :String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
      },
    jsondata :[
      {
        id:{
          type:String,
          required : true
        },
        title:{
          type : String,
          required : true
        },
        format:{
          type:String
        },
        fav:{
          type:Boolean,
          required:true
        }
      }
    ],
      date: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('MusicUser',userObj)