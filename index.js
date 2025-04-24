const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json())

app.post('/login',(req,res)=>{
    const {username ,Email , password} = req.body
    if(!username){
        return res.status(400).json({message: "username not found"})
    }
    if(!Email){
        return res.status(400).json({message: "email cannot be empty"})
    }
    if(!password || password.length < 4 || password.length > 12){
        return res.status(400).json({message: "password cannot be empty and it should be greater than 4 and less than 12 "})
    }
    res.status(200).json({message:"login is successful"})
})

app.get('/',(req,res)=>{
    res.send('welcome to login page')
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})