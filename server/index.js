import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000; //This is a fallback, in case port 8000 is not available

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`);

});

