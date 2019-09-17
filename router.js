const express = require('express');
const user=require('./users');
const post=require('./post')
let router=express.Router();


router.get('/',  (req, res)=> {
    
res.send('Nothing..');
});
router.post('/signup',user.signup)
router.post('/login',user.login)
router.get('/api/allusers',user.allUsers)       
router.get('/api/getprofile',user.getProfile)
router.post('/api/updateprofile',user.updateProfile)
router.post('/api/post',post.post)
router.get('/api/getpost',post.getPost)
router.post('/api/deletepost',post.deletePost)
module.exports=router