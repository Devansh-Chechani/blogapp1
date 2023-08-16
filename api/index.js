import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import categoryRoute from './routes/categories.js';


const app = express();
dotenv.config();

app.use(express.json());

app.use('/api/auth' ,authRoute)
app.use('/api/users' ,userRoute)
app.use('/api/posts' ,postRoute)
app.use('/api/categories' ,categoryRoute)

const Connection = async()=>{ 
   try{
      await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
      console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("There is some error while connecting the database",error);
    }
}

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images')
  },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
  
})


const upload  = multer({storage:storage})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

app.listen(8000,function(){
    console.log("app is listening on port 8000")
})

Connection();