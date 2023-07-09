const express=require('express');
const router=express.Router();
const Orders=require('../models/Orders')
router.post('/orderfood',async (req,res)=>{
    var data=req.body.orderdata;
    data=[{'orderdate':req.body.orderdate},...data];
    const mail=req.body.mail;
    
    Orders.find({mail:mail}).exec().then((result)=>{
       
        if(result.length===0 )
        {
            
            try{
                
                Orders.create({
                    mail:mail,
                    orders:[data]
                });
                res.json({success:true});
            }
            catch(error)
            {
                console.log(error);
                res.json({success:false});
            }
            
        }
        else
        {   try{
            result[0].orders.push(data);
           
            const rest=Orders.updateOne({mail:mail},{orders:result[0].orders}).exec();
            
            res.json({success:true});
        }
        catch(error)
        {
            console.log(error);
            res.json({success:false});
        }
           
        }
    })

});

module.exports=router;