const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')


const patientSchema=new Schema({
  username:{
    type:String,
    required:true

  },
  email:{
    type:String,
    required:true,
    unique:true


  },
  setpassword:{
    type:String,
    required:true

  }


})

patientSchema.pre('save',function(next){
  if(this.isModified('setpassword')){
    bcrypt.hash(this.setpassword,8,(err,hash)=>{
      if(err)
      return next(err);
    this.setpassword=hash;
    next();
    })
  }
})


const patientsModel=mongoose.model('patient',patientSchema);

module.exports=patientsModel;
