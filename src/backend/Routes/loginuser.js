const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const secretkey="*&^%$#thisismyfirstmernstackproject#%$&@"
router.post('/loginuser', [
    body('mail').isEmail().withMessage('not a valid mail'),
    body('password').isLength({min:5})
    ],(req,res)=>{
       
     try{
        const result=validationResult(req);
        if(result.isEmpty())
        {
         User.findOne({mail:req.body.mail}).exec().then((ans)=>
          {
           
            if(ans===null)
            {
             return res.status(400).json({error:"email is not registered"});
            }
           else if(bcrypt.compareSync(req.body.password, ans.password))
           {
            const data={
                user:{
                    id:ans.id
                }
               
            }
            const authToken=jwt.sign(data, secretkey);
            res.json({success:true,authToken:authToken});
           }
           else
           return res.status(400).json({error:'invalid password'});
          });
        }
        else
        {
            res.send({error:result.array()});
        }
     }
     catch(error){
        res.send(error);
     }
})

module.exports=router;
