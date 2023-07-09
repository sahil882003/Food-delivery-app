const express=require('express');
const router=express.Router();

const FoodItem=require('../models/FoodItem');
const FoodCategory=require('../models/FoodCategory');

router.post('/fetchfooddata',async (req,res)=>{
 
    FoodItem.find({}).exec().then(result=>
        {
           FoodCategory.find({}).exec().then(reslt=>{
            res.send([result,reslt]);
           })
        });
})

module.exports=router;