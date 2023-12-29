const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const patientsModel=require('./../../backend/schemas/registration-schema')


router.post('/',async(req,res)=>{


  const result=await patientsModel.create({
    username:req.body.username,
    email:req.body.email,
    setpassword:req.body.password
  })

  return res.status(201).json({msg:'success'})

})



module.exports = router;
