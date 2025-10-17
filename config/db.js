const mongoose =  require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://therealeltech_db_user:therealeltech@cluster0.hynlt1n.mongodb.net/", {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongoose Db Connected Successfully");
    }catch(error){
        console.log("Mongoose connection Failed");
        process.exit(1);
    }
}
module.exports = connectDB;