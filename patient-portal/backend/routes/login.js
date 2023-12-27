const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
router.post('/',async(req,res)=>{

  const result=await loginModel.create({
    username:req.body.username,
    password:req.body.password

  })

  res.status(201).json({message:"success"})


})

const Loginschema=new mongoose.Schema({
  username:String,
  password:String
})

const loginModel= mongoose.model('login',Loginschema);

module.exports=router;


