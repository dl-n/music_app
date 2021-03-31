const mongoose = require('mongoose');
//const config = require('config');

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://lakshmi8940:lakshmi8940@cluster0.yv0cx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
    });
    console.log('mongo connected')
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;