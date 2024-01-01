const express=require('express');
const router=express.Router();
const loginModel=require('../../backend/schemas/login-schema');
const patientSchema=require('./../schemas/registration-schema');
const bcrypt=require('bcrypt')



router.post('/',async(req,res)=>{
  const {username,password}=req.body;

  const user= patientSchema.find({
    email:username
  })
  const hashedpassword=await bcrypt.compare(password,user.setpassword,(err,res)=>{
    if(res){
      return res.json({message:"success"})
    }
  })
  console.log(hashedpassword)

  // const result=await patientSchema.create({
  //   username:req.body.username,
  //   password:req.body.password,
  //   setpassword:"test"

  // })




})



module.exports=router;


