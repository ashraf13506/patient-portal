const express=require('express');
const router=express.Router();
const loginModel=require('../../backend/schemas/login-schema')


router.post('/',async(req,res)=>{

  const result=await loginModel.create({
    username:req.body.username,
    password:req.body.password

  })

  res.status(201).json({message:"success"})


})



module.exports=router;


