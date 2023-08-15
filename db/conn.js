const mongoose = require("mongoose");

const DB = "mongodb+srv://teespring778:Theeggisop69@cluster0.oyvd4yz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))