const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const apmntSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true,
    },
    date:{
        type:String,
        required : true,
    },
    service:{
        type:String,
        required : true,
    },
    tookBy :{
        type :ObjectId,
        ref:"User"
    }
})

mongoose.model("Appointment" , apmntSchema)