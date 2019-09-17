const mongoose= require('mongoose');


var Schema = mongoose.Schema;

let postSchema=new Schema({
    user_id:{
        type:Schema.ObjectId,
        ref:'user',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    }
})

module.exports=mongoose.model('post',postSchema)