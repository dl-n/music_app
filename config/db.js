const mongoose = require('mongoose');
const config = require('config');

const connectDB = async ()=>{
    try{
        await mongoose.connect(config.get('mongoURI'),{
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