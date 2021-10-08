const express = require('express')
const app = express();
const port=process.env.PORT||4000  

app.get('/',(req,res)=>{
     res.send("welcome to node js ")
})




app.listen(port , ()=>{ 
   console.log("server started at 4000 ")  
})