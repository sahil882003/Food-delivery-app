const express=require('express');
const router=express.Router();
const Orders=require('../models/Orders');

router.post('/fetchorderdata',async (req,res)=>{
    const map=new Map();
    const autoConvertMapToObject = (map) => {
        const obj = {};
        for (const item of [...map]) {
          const [
            key,
            value
          ] = item;
          obj[key] = value;
        }
        return obj;
      }
    Orders.find({mail:req.body.mail}).exec().then((result)=>{
        map.set(result[0].orders[0][0].orderdate,[]);
        
        result[0].orders.map((order)=>
        {
            
            const temp=map.get(order[0].orderdate);
            if(temp===undefined)
            {
                map.set(order[0].orderdate,[])
                const arr=map.get(order[0].orderdate);
                order.map((item,index)=>{
                    if(index!=0)
                    arr.push(item);
                })
                
            }
            else
            {
                
                order.map((item,index)=>{
                    if(index!=0)
                    temp.push(item);
                })
            }
        })
         
        res.json({data:autoConvertMapToObject(map),success:true,});
        
        
    })
   
})

module.exports=router;