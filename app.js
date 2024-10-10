import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express();


app.get('/',(req,res)=> {
    res.status(200).json({message:"Okey is getting"});
});

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})