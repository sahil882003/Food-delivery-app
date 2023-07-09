const express=require('express');


const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://sahillathib:skssl786@cluster0.ig2hfue.mongodb.net/FoodDB", {useNewUrlParser:true,useUnifiedTopology: true});
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with,Content-Type,Accept"

    );
    next();
});
app.use('/api',require('./Routes/createuser'));
app.use('/api',require('./Routes/loginuser'));
app.use('/api',require('./Routes/fooddata'));
app.use('/api',require('./Routes/orderfood'));
app.use('/api',require('./Routes/fetchorderdata'));
app.get('/',(req,res)=>{
    res.send('hello');
});

app.listen(5000,(req,res)=>{
    
    console.log('server on and running at port 5000');
   
    
})