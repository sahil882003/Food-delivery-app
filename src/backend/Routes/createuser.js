const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

router.post('/createuser',[
    body('mail').isEmail().withMessage('not a valid mail'),
    body('password').isLength({min:5}),
    body.apply('name').isLength({min:5})
  ],(req,res)=>{
  
    const result=validationResult(req);
    if(result.isEmpty())
    try{
        User.create({
            name:req.body.name,
            mail:req.body.mail,
            password:bcrypt.hashSync(req.body.password,salt),
            location:req.body.location
          });
        res.json({success:true})
    }
    catch(error){
       console.log(error);
       res.json({success:false});
    }
    else{
        res.send({error:result.array()});
    }
 
})

module.exports=router;