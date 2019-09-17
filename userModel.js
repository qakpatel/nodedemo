const mongoose= require('mongoose');
var Schema = mongoose.Schema;

let userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    },
    address:{
        type:Object,
        default:{
            city:{
                type:String,
                require:true
            },
            state:{
                type:String,
                require:true
            },
            street:{
                type:String,
                require:true
            },
            pincode:{
                type:String,
                require:true
            }
        }
    }
})

module.exports=mongoose.model('user',userSchema)