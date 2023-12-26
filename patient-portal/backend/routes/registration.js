const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/',async(req,res)=>{

  const body=req.body;
  const result=await patient.create({
    username:body.username,
    email:body.email,
    setpassword:body.setpassword
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

const patient=mongoose.model('patient',patientSchema)

module.exports = router;
