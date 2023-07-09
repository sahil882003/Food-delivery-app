const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    CategoryName:String
})

module.exports=mongoose.model('categorie',categorySchema);