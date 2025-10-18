const mongoose =  require('mongoose');
const donenv = require ("dotenv");
donenv.config();

const connectDB = async() => {
    
    try{
        await mongoose.connect(process.env.MONGU_URL, {
            //-----------WARNINGS---------------
            //useNewUrlParser:true,
            //useUnfiedTopology:true
        });
        console.log("Mongoose Db Connected Successfully");
    }catch(error){
        console.log("Mongoose connection Failed");
        process.exit(1);
    }
}
module.exports = connectDB;