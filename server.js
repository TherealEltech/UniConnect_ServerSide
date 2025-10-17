const express = require("express");
const connectDB = require("./config/db");

//define the port number the server will listen to

const PORT = 3000;

//creating an instance of express application as starting point

const app = express();
connectDB();

app.listen(PORT, "0.0.0.0", function(){
    console.log(`Server is running on port ${PORT}`);
});