const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/mongodbass`)

const userSchema=mongoose.Schema({   // this is a methos

    username:String,
    
    email:String,
    age:Number,
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]

})


module.exports = mongoose.model("user",userSchema); // here jo user hai naa wo database me uska plural hoga




