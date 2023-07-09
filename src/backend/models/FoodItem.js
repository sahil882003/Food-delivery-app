const mongoose=require('mongoose');

fooditemSchema=new mongoose.Schema({
    categoryname:String,
    name:String,
    image:String,
    options:Map,
    description:String

});

module.exports=mongoose.model('fooditem',fooditemSchema);