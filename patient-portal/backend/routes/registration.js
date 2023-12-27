const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/',async(req,res)=>{


  const result=await patientsModel.create({
    username:req.body.username,
    email:req.body.email,
    setpassword:req.body.setpassword
  })

  return res.status(201).json({msg:'success'})

})

const patientSchema=new mongoose.Schema({
  username:{
    type:String,

  },
  email:{
    type:String,


  },
  setpassword:{
    type:String,

  }


})

const patientsModel=mongoose.model('patient',patientSchema)

module.exports = router;
