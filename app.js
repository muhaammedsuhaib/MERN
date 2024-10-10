import express from 'express';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import routes from './user/user.routes.js';

configDotenv();
const app = express();

app.use(express.json());
connectDB();

app.use('/api', routes);


const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})