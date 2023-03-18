const express=require("express");

const app=express();

const port=8081;

const {users}=require('./data/users.json')

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        message:"Server is up and running :-)",
    });
});

app.get('/users', (req,res)=>{
    res.status(202).json({
        sucess:true,
        data:users
    });
});

app.get('*',(req,res)=>{
    res.status(404).json({
        message:"This route doesn't exist"
    });
});

app.listen(port, ()=>{
    console.log(`Server is Running at port ${port}`);
});