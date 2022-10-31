import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Post from './routes/post.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}));
app.use(cors());

app.use('/posts',Post);
app.get('/',(req,res) => {
    res.send('hello')
})

const CON_URL = 'mongodb+srv://ssquare0710:Shwet@cluster0.3zwlgpb.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CON_URL , { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify', false);
