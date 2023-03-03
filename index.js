// this is server file 
import  express  from "express";

const app = express();

app.use("/",(req,res)=>{
    res.json({message:"hello naitik"})
})

const port = 9000;

app.listen(9000,() =>{
    console.log(`starting server on port ${port}`);
})