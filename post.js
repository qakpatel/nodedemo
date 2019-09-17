const post=require('./postModel');
const jwt = require('jsonwebtoken');


module.exports={

    post:(req,res)=>{
       
        jwt.verify(req.headers["authorization"], 'qqqq',(err,decoded)=>{
                if(err){
                    res.send({status:402,message:'Invalid token'})
                }else{
                    if(!decoded.id){
                        res.send({status:403,message:'Unauthirized token'})
                }else{
                    let postData=new post({user_id:decoded.id,title:req.body.title,body:req.body.body})
                    postData.save((error,result)=>{
                        if(error){
                            res.send({status:500,message:'Internal server error'})  
                        }else{
                            res.send({status:200,message:'post submitted succesfully',result})
                        }
                    })
                }
            
            }

        })
    },

    getPost:(req,res)=>{
        jwt.verify(req.headers["authorization"], 'qqqq',(err,decoded)=>{
            if(err){
                res.send({status:402,message:'Invalid token'})
            }else{
                if(!decoded.id){
                    res.send({status:403,message:'Unauthirized token'})
                }else{

                    post.find({},{__v:0}).populate("user_id",{name:1}).exec((error,result)=>{
                        if(error){
                           res.send({status:500,message:'Internal server error'})
                        }else{
                          res.send({status:200,message:'post get succesfully',result})
                       }
                    });
                   
                }
               
            }
           
        })
        
    },

    deletePost:(req,res)=>{
        jwt.verify(req.headers["authorization"], 'qqqq',(err,decoded)=>{
            if(err){
                res.send({status:402,message:'Invalid token'})
            }else{
                if(!decoded.id){
                    res.send({status:403,message:'Unauthirized token'})
                }else{

                    post.deleteOne({_id:req.body._id},(error,result)=>{
                        if(error){
                           res.send({status:500,message:'Internal server error'})
                        }else{
                            console.log(result)
                          res.send({status:200,message:'delete successfully'})
                       }
                    });
                   
                }
               
            }
           
        
        })
        
    }



}