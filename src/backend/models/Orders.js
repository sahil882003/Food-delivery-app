const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    mail:{
        type:String,
        require:true,
        unique:true
    },
    orders:{
        type:[],
        require:true
    }
})

module.exports=mongoose.model('order',orderschema);