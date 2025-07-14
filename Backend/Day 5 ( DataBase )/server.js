const express = require('express')
const ConnectToDb = require('./src/db/db')
const app = express()

ConnectToDb()
app.get('/',(req,res)=>{

    res.send("Helo World")

})

app.listen('3000',()=>{
    console.log("Server is running on port 3000");
})