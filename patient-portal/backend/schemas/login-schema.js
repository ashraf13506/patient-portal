
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')

const Loginschema=new Schema({
  username:String,
  password:String
})
Loginschema.pre('save',function(next){
  if(this.isModified('password')){
    bcrypt.hash(this.password,8,(err,hash)=>{
      if(err)
      return next(err);
    this.password=hash;
    next();
    })
  }
})

const loginModel= mongoose.model('login',Loginschema);

module.exports=loginModel;
